import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/shared/resources.service';
import {RadioOption} from 'src/app/shared/input/input-radio/radio-option.model'

@Component({
  selector: 'app-execucao',
  templateUrl: './execucao.component.html',
  styleUrls: ['./execucao.component.css']
})
export class ExecucaoComponent implements OnInit {

statusOptions: RadioOption[] = [
    {label: 'Não apresentada', value: '1'},
    {label: 'Em análise', value: '2'},
    {label: 'Aprovada', value: '3'},
    {label: 'Rejeitada', value: '4'},
  ]
  public execution
 
  staus:RadioOption
  constructor(private service:ResourcesService) { }

  ngOnInit() {

    this.execution = this.service.services.execution
     if(this.execution){

     	this.staus = new RadioOption(this.statusOptions[this.execution.status].label,this.statusOptions[this.execution.status].value)

     }   

  }


  dateF(d,f?:string){

  	return this.service.dateF(d,f)
  	
  }

}
