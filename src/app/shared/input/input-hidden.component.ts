import { Component, OnInit, ContentChild,  AfterContentInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-hidden',
  templateUrl: './input-hidden.component.html'
})
export class InputHiddenComponent implements OnInit, AfterContentInit {


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

}
