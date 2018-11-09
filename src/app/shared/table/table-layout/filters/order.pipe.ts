import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'oderPipe'})
export class OrderPipe implements PipeTransform {
    constructor () { }
    transform(value: any, format: string): any {
        if(value == 'ASC' || value == 'asc'){
            return "DESC"
        }
        return "ASC"
    }
}