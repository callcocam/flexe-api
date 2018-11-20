import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../shared/services/local-storage.service';
import { ResourcesService } from '../../shared/resources.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public cover = "/dist/avatar.png";
  public menusOperational = [
      {name:"Empresa",route:"/admin/empresa",class:"treeview-item"},
      {name:"Usuarios",route:"/admin/usuarios",class:"treeview-item"}
  ]
  
    public user ={
        id:'',
        company_id:'',
        role_id:0,
        assets:'',
        name:'',
        email:'',
        cover:'',
        description:"",
        status:0,
        created_at:"",
        updated_at:""
    };

    constructor(private storage:LocalStorageService, public service:ResourcesService) { }

    ngOnInit() {
        this.user = JSON.parse(this.storage.get(this.storage.USER_KEY))

        this.cover = `${this.service.baseUrl}${this.user.cover}`
    }

}
