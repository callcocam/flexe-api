import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaskCurrencyDirective } from './mask/mask-currency.directive';
import { MaskDateTimeDirective } from './mask/mask-date-time.directive';
import { MaskDateDirective } from './mask/mask-date.directive';
import { CnpjValidatorDirective } from './mask/mask-cnpj.directive';
import { CpfValidatorDirective } from './mask/mask-cpf.directive';
import { CnpjPipe } from './mask/pipes/cnpj.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule 
  ],
  declarations: [    
    MaskCurrencyDirective,
    MaskDateTimeDirective,
    MaskDateDirective,
    CnpjValidatorDirective,
    CpfValidatorDirective,
    CnpjPipe
  ],
  exports:[
    MaskCurrencyDirective,
    MaskDateTimeDirective,
    MaskDateDirective,
    CnpjValidatorDirective,
    CpfValidatorDirective,
    CnpjPipe
  ]
})
export class UtilsModule { }
