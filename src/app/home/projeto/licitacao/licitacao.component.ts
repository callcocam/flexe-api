import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/shared/resources.service';

@Component({
  selector: 'app-licitacao',
  templateUrl: './licitacao.component.html',
  styleUrls: ['./licitacao.component.css']
})
export class LicitacaoComponent implements OnInit {

  public licitacion

  constructor(private service:ResourcesService) { }

  ngOnInit() {

    this.licitacion = this.service.services.licitacion
  }

}
