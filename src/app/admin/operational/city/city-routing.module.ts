
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardRouterService } from 'src/app/shared/services/auth-guard-router.service';
import { CityComponent } from './city.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityDeleteComponent } from './city-delete/city-delete.component';
import { ContentComponent } from 'src/app/content/content.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



const routes: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    {
        path: 'admin', component: ContentComponent,
        canActivate: [AuthGuardRouterService],
        children:[
            {
                path: 'cidades', component: CityComponent,
                canActivate: [AuthGuardRouterService],
                data:{
                    title: 'Cidades'
                }
            },
             {
                path: 'cidades/cadastrar',
                component: CityEditComponent,
                canActivate: [AuthGuardRouterService],
                data:{
                    title: 'Cadastrar Cidade'
                }
            },
            {
                path: 'cidades/:id/editar',
                component: CityEditComponent,
                canActivate: [AuthGuardRouterService],
                data:{
                    title: 'Editar Cidade'
                }
            },
        
            {
                path: 'cidades/:id/excluir',
                component: CityDeleteComponent,
                canActivate: [AuthGuardRouterService],
                data:{
                    title: 'Excluir Cidade'
                }
            }
        ]
    }
  ];
  
  @NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: []
  })
  export class CityRoutingModule { }