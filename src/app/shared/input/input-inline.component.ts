import {AfterContentInit, Component, ContentChild, Input, OnInit} from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-inline',
  templateUrl: './input-inline.component.html'
})
export class InputInlineComponent implements OnInit, AfterContentInit  {

  @Input() label: string
  @Input() errorMessage: string

  input: any

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
      this.input = this.model || this.control
      if(this.input === undefined){
          throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName')
      }
  }

  hasSuccess(): boolean{
      return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
      return this.input.invalid && (this.input.dirty || this.input.touched)
  }


}