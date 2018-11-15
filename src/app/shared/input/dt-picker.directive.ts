import { Directive, Input, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
declare var Datetimepicker: any;
@Directive({
  selector: '[appDtPicker]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DtPickerDirective,
    multi: true
  }]
})
export class DtPickerDirective implements  AfterViewInit, 
AfterViewChecked,ControlValueAccessor {
 
  ngAfterViewChecked(): void {
    throw new Error("Method not implemented.");
  }
 
  ngAfterViewInit(): void {

    console.log(this.appDtPicker)

  }

  
  onTouched: any;

  onChange: any;

  writeValue(obj: any): void {
    console.log(this.appDtPicker)
  
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  @Input('appDtPicker') appDtPicker: string;

  constructor(public el: ElementRef) {

   var datetimepicker = new Datetimepicker()
     console.log(datetimepicker)
   //jQuery(el.nativeElement).datetimepicker()

  }


}
