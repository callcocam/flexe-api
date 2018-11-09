import { Component, OnInit, AfterContentInit, ContentChild, Input, Output, EventEmitter } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements  OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string

  
  @Output() SelectedFile = new EventEmitter<File>()

  input: any

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  onFileChanged(event){

    this.SelectedFile.emit(event.target.files[0])

  }
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
