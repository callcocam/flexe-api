import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/shared/resources.service';
import { FilterSerach } from 'src/app/shared/table/table-layout/filters/filter.model';
import { Settings } from '../../../admin/utils/settings.model';

@Component({
  selector: 'app-concluidos',
  templateUrl: './concluidos.component.html',
  styleUrls: ['./concluidos.component.css']
})
export class ConcluidosComponent implements OnInit {

 public settings: Settings

  public numberOfPaginators

  public results

  public tenant

  public filterSerach: FilterSerach
  
  constructor(private service:ResourcesService) {}

  ngOnInit() {

    this.service.path = '/project'

    this.filterSerach = new FilterSerach({

        between: '', column: 'name', limit: '6', offSet: '0', order: 'DESC', search: '', start: '', status: 2, end: '', page: '1'

      })

    this.service.setTitle('LISTA DE PROJETOS') 

    this.load(this.filterSerach)      
    
  }
  
  load(event) {

  this.service.build(event).list().subscribe(response => {

      this.results =response.rows

      this.tenant = response.tenant

      this.settings = new Settings(response)

      this.filterSerach = new FilterSerach(this.settings.params)


    })
      

  }
  list(event) {

   this.load(event)      

  }

  img(src){

   return this.service.src(src)

  }

  

}
