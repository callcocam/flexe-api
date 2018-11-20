import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/shared/resources.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  public results
  public tenant
  public contract
  public execution
  public conclusion
  public licitacion
  redirectAfterLogin = ['/'];
  constructor(private service: ResourcesService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {


    this.load()
  }

  load() {

    let id = this.activateRoute.snapshot.params['id']

    if (id) {
      this.service.path = '/project';
      this.service.view(id).subscribe(response => {

        this.results = response.rows
        this.contract = response.contract
        this.execution = response.execution
        this.conclusion = response.conclusion
        this.licitacion = response.licitacion
        this.tenant = response.tenant
        this.service.addService(response)
		
        this.service.company =response.tenant

      })
    }

  }

}
