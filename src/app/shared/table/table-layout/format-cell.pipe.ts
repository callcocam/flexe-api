import { Pipe,Renderer, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
@Pipe({ name: 'formatCell' })
export class FormatCellPipe implements PipeTransform {
    constructor (
        private currencyPipe: CurrencyPipe,
        private datePipe:DatePipe
    ) { }
    transform(value: any, format: string) {
        if ( value === undefined ) {
            return 'not available';
        }
                
        if (format === 'currency') {
            return this.currencyPipe.transform(value, 'BRL', 'symbol');
        }
         
        if (format === 'date') {
            return value;
        }
        
        return value;
    }
}