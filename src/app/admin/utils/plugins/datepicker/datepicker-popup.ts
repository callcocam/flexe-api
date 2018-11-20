import { Component, OnInit, Input, Injectable, Output, EventEmitter } from '@angular/core';
import { Datepicker } from './datepicker.model';


const I18N_VALUES = {
    'pt_BR': {
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sa'],
        months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    }
    // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
    language = 'pt_BR';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

    constructor(private _i18n: I18n) {
        super();
    }

    getWeekdayShortName(weekday: number): string {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    }
    getMonthShortName(month: number): string {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    }
    getMonthFullName(month: number): string {
        return this.getMonthShortName(month);
    }

    getDayAriaLabel(date: NgbDateStruct): string {
        return `${date.day}-${date.month}-${date.year}`;
    }
}

import * as moment from 'moment';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-datepicker-popup',
    templateUrl: './datepicker-popup.html',
    providers: [NgbDatepickerConfig, I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }]
})

export class NgbdDatepickerPopup implements OnInit {

    @Output() dateSelect = new EventEmitter();

    @Input() date: Datepicker
    @Input() field: string = 'created_at'

    public datepicker: Datepicker

    constructor(config: NgbDatepickerConfig, calendar: NgbCalendar) {
        // customize default values of datepickers used by this component tree
        config.minDate = { year: 1900, month: 1, day: 1 };
        config.maxDate = { year: 2099, month: 12, day: 31 };

        // days that don't belong to current month are not visible
        //config.outsideDays = 'hidden';


        // weekends are disabled
        //config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;
    }
    ngOnInit(): void {

        this.datepicker = new Datepicker()

        if (this.date) {
            this.datepicker.year = this.date.year
            this.datepicker.month = this.date.month
            this.datepicker.day = this.date.day
        }
        else {
            this.datepicker.year = moment().day()
            this.datepicker.month = moment().month()
            this.datepicker.day = moment().year()
        }

    }

    onDateSelect(event) {

        this.dateSelect.emit({
            data: `${event.year}-${event.month}-${event.day}`, field: this.field
        })

    }

}