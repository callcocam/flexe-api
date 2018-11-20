import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/shared/resources.service';

@Component({
  selector: 'app-execucao',
  templateUrl: './execucao.component.html',
  styleUrls: ['./execucao.component.css']
})
export class ExecucaoComponent implements OnInit {

  public execution
 
  constructor(private service:ResourcesService) { }

  ngOnInit() {

    this.execution = this.service.services.execution
  }

}
