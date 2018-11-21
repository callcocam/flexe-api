import { Component, OnInit, Input, Output, ContentChild, EventEmitter, AfterContentInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';
import { ResourcesService } from '../../resources.service';

@Component({
  selector: 'app-file-upload-preview',
  templateUrl: './file-upload-preview.component.html',
  styleUrls: ['./file-upload-preview.component.css']
})
export class FileUploadPreviewComponent implements OnInit, AfterContentInit {


  @Input() label: string

  @Input() url: string = ''

  @Input() errorMessage: string


  @Output() SelectedFile = new EventEmitter<File>()

  input: any
  results: any ={
    result:''
  }

  @ContentChild(NgModel) model: NgModel

  @ContentChild(FormControlName) control: FormControlName

  constructor(private service: ResourcesService) { }

  ngOnInit() {

    
    if(!this.url){
      
       this.url = `//dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547`

    }
    else{

     this.url =  this.service.src(this.url)


    }

  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.results = event.target
        this.url = this.results.result;
      }

      this.SelectedFile.emit(event.target.files[0])

    }

  }

  ngAfterContentInit() {
    this.input = this.model || this.control
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
