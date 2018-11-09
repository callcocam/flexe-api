/**
 * Arquivo de configuração do módulo.
 *
 * @author Claudio Campos <contato@sigasmart.com.br>
 * @since 0.0.3
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { 
	CompanieCreateComponent,
	CompanieEditComponent,
	CompanieComponent,
	CompanieViewComponent
} from './';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
	imports: [ 
		CommonModule,
        SharedModule,
		RouterModule
	],
	declarations: [
		CompanieCreateComponent,
		CompanieEditComponent,
		CompanieComponent,
		CompanieViewComponent
	],
	providers: []
})
export class CompanieModule {}
