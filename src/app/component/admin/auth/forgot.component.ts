import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html'
})
export class ForgotComponent implements OnInit {

    forgoutForm: FormGroup

    emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    constructor(public formBuilder:FormBuilder) { }

    ngOnInit() {

        this.forgoutForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)])
        })
    }

}
