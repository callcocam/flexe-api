
import { Routes } from '@angular/router';
import { AuthGuardRouterService } from 'src/app/shared/services/auth-guard-router.service';
import { CityComponent } from './city.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityDeleteComponent } from './city-delete/city-delete.component';

export const cityRoutes:Routes = [
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
];
