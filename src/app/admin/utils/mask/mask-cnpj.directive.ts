/**
 * Diretiva de validação de CNPJ.
 *
 * @author Claudio Campos <callcocam@gmail.com>
 * @since 0.0.1
 */

import { Directive } from '@angular/core';
import { 
  AbstractControl, NG_VALIDATORS, Validator
} from '@angular/forms';
import { CnpjValidator } from '../validator/cnpj.validator';


@Directive({
  selector: '[cnpj]',
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: CnpjValidatorDirective, 
    multi: true 
  }]
})
export class CnpjValidatorDirective implements Validator {

  /**
   * Valida os dados.
   *
   * @param AbstractControl control
   * @return object ou null caso válido
   */
  validate(control: AbstractControl): {[key: string]: any} {
    return CnpjValidator.validate(control);
  }
}
