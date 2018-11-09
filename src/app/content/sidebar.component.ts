import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public menusOperational = [
      {name:"Empresa",route:"/admin/empresa",class:"treeview-item"},
      {name:"Usuarios",route:"/admin/usuarios",class:"treeview-item"},
      {name:"Modulos",route:"/admin/resources",class:"treeview-item"},
      {name:"Nivel De Acesso",route:"/admin/roles",class:"treeview-item"},
      {name:"Privilegios",route:"/admin/privilegios",class:"treeview-item"},
      {name:"Cidades",route:"/admin/cidades",class:"treeview-item"},
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

    constructor(private storage:LocalStorageService) { }

    ngOnInit() {
        this.user = JSON.parse(this.storage.get(this.storage.USER_KEY))
    }

}
