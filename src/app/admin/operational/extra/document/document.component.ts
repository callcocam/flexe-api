import { Component, OnInit, Input } from '@angular/core';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';
import * as moment from 'moment';
import { Document } from './document.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

 
  @Input() parent
  
  @Input() table:string = 'users'

  public document: Document;

  public records

  constructor(private service: ResourcesService, private alert: SnotifyService) { }

  ngOnInit() {

    this.service.path = '/document'

    this.document = new Document(0, '', '', '', moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'), this.parent.id,  this.table, 1)

    this.list()
  }

  list() {

    this.service.parents({
      assets:this.table,
      parent:this.parent.id,
    }).list().subscribe(response => {

      this.records = response.rows

      this.document = new Document(0, '', '', '', moment().format('DD/MM/YYYY HH:mm:ss'), moment().format('DD/MM/YYYY HH:mm:ss'), this.parent.id, this.table, 1)

    })

  }

  edit(record) {

    this.document = new Document(record.id, record.name, record.icone, record.value, record.created_at, record.updated_at, this.parent.id, record.assets, record.status)

  }

  delete(id) {

    this.service.path = '/document'

    this.alert.confirm('Deseja realmente excluir o registro', 'Alerta!!', {
      timeout: 5000,

      showProgressBar: true,

      closeOnClick: false,

      pauseOnHover: true,

      buttons: [

        { text: 'Sim', action: (toast) => {

          this.alert.remove(toast.id)

          this.service.delete(id).subscribe(response => {

            if (response.result) {
              this.alert.success(response.error)
            }
            else {
              this.alert.error(response.error)
            }
            this.list()
      
          })
        }, bold: false },
        
        { text: 'Não', action: (toast) => this.alert.remove(toast.id) }
      ]
    })
  

  }
  onSubmit() {
    this.service.path = '/document'

    this.service.post(this.document).subscribe(response => {

      this.list()

      if (response.result) {

        this.alert.success(response.error)
      }
      else {

        this.alert.error(response.error)
      }


    })

  }

}
