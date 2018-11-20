import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment from 'moment';
@Directive({
  selector: '[dateMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskDateDirective,
    multi: true
  }]
})
export class MaskDateDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  @Input('dateMask') dateMask: string;

  constructor(private el: ElementRef) {
    moment.locale('pt-BR');
  }

  writeValue(value: any): void {
    if (value) {
      
      this.el.nativeElement.value = this.aplicarMascara(value);

    }
    else {

      this.el.nativeElement.value = this.aplicarMascara(moment().format('DD/MM/YYYY'));

    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    let valor = $event.target.value.replace(/\D/g, '');

    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      this.onChange(valor);
      return;
    }

    let pad = this.dateMask.replace(/\D/g, '').replace(/9/g, '_');
    if (valor.length <= pad.length) {
      this.onChange(valor);
    }

    $event.target.value = this.aplicarMascara(valor);
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if ($event.target.value.length === this.dateMask.length) {
      return;
    }
    this.onChange('');
    $event.target.value = moment().format('DD/MM/YYYY');
  }

  /**
   * Aplica a máscara a determinado valor.
   *
   * @param string valor
   * @return string
   */
  aplicarMascara(valor: string): string {
    valor = valor.replace(/\D/g, '');
    let pad = this.dateMask.replace(/\D/g, '').replace(/9/g, '_');
    let valorMask = valor + pad.substring(0, pad.length - valor.length);
    let valorMaskPos = 0;

    valor = '';
    for (let i = 0; i < this.dateMask.length; i++) {
      if (isNaN(parseInt(this.dateMask.charAt(i)))) {
        valor += this.dateMask.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }

    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }

    return valor;
  }

}
