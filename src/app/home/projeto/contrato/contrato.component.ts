import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/shared/resources.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

   public contract
   
  constructor(private service:ResourcesService) { }

  ngOnInit() {

    this.contract = this.service.services.contract
	
  }



  dateF(d,f?:string){

  	return this.service.dateF(d,f)
  	
  }
}
