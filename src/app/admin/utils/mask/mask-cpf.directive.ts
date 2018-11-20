/**
 * Diretiva de validação de CPF.
 *
 * @author Claudio Campos <callcocam@gmail.com>
 * @since 0.0.1
 */

import { Directive } from '@angular/core';
import { 
  AbstractControl, NG_VALIDATORS, Validator
} from '@angular/forms';
import { CpfValidator } from '../validator/cpf.validator';


@Directive({
  selector: '[cpf]',
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: CpfValidatorDirective, 
    multi: true 
  }]
})
export class CpfValidatorDirective implements Validator {

  /**
   * Valida os dados.
   *
   * @param AbstractControl control
   * @return object ou null caso válido
   */
  validate(control: AbstractControl): {[key: string]: any} {
    return CpfValidator.validate(control);
  }
}
