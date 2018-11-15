import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuardRouterService } from './shared/services/auth-guard-router.service';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './content/dashboard.component';
import { AboutComponent } from './admin/about/about.component';

// operacionalRoutes.push(...cityRoutes)
// operacionalRoutes.push(...companieRoutes)
// operacionalRoutes.push(...roleRoutes)
// operacionalRoutes.push(...resourceRoutes)
// operacionalRoutes.push(...prvilegieRoutes)
// operacionalRoutes.push(...userRoutes)

import {
    CompanieEditComponent,
    CompanieComponent,
    CompanieViewComponent,
    CompanieDeleteComponent
} from './admin/operational/companie';


import {
    RoleComponent,
    RoleEditComponent,
    RoleDeleteComponent,
    RoleViewComponent
} from './admin/operational/role';


import {
    PrivilegieComponent,
    PrivilegieEditComponent,
    PrivilegieDeleteComponent,
    PrivilegieViewComponent
} from './admin/operational/privilegie';

import {
    ResourceComponent,
    ResourceEditComponent,
    ResourceDeleteComponent,
    ResourceViewComponent
} from './admin/operational/resource';


import {
    UserComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserViewComponent
} from './admin/operational/user';

import {
    CityComponent,
    CityEditComponent,
    CityDeleteComponent
} from './admin/operational/city';


const routes: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    {
        path: 'admin', component: ContentComponent,
        canActivate: [AuthGuardRouterService],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [AuthGuardRouterService]
            },
            {
                path: 'sobre',
                component: AboutComponent,
                canActivate: [AuthGuardRouterService]
            },
            //Companias
            {
                path: 'empresa',
                component: CompanieComponent,
                canActivate: [AuthGuardRouterService],
                children: [
                    { path: '', redirectTo: 'listar', pathMatch: 'full' },
                    {
                        path: 'listar',
                        component: CompanieViewComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Cadastrar Empresa'
                        }
                    },
                    {
                        path: 'cadastrar',
                        component: CompanieEditComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Cadastrar Empresa'
                        }
                    },
                    {
                        path: ':id/editar',
                        component: CompanieEditComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Editar Empresa'
                        },
                        children: [  ]
                    },
                    {
                        path: ':id/excluir',
                        component: CompanieDeleteComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Excluir Empresa'
                        }
                    },
                     //empres contact
                ]
            },

            //Role
            {
                path: 'roles',
                component: RoleComponent,
                canActivate: [AuthGuardRouterService]
            },
            {
                path: 'roles/cadastrar',
                component: RoleEditComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Cadastrar Role'
                }
            },
            {
                path: 'roles/:id/editar',
                component: RoleEditComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Editar Role'
                }
            },
            {
                path: 'roles/:id/excluir',
                component: RoleDeleteComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Excluir Role'
                }
            },
            {
                path: 'roles/:id/view',
                component: RoleViewComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Visualizar Role'
                }
            },
            //Resource
            {
                path: 'resources',
                component: ResourceComponent,
                canActivate: [AuthGuardRouterService]
            },
            {
                path: 'resources/cadastrar',
                component: ResourceEditComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Cadastrar Resource'
                }
            },
            {
                path: 'resources/:id/editar',
                component: ResourceEditComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Editar Resource'
                }
            },
            {
                path: 'resources/:id/excluir',
                component: ResourceDeleteComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Excluir Resource'
                }
            },
            {
                path: 'resources/:id/view',
                component: ResourceViewComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Visualizar Resource'
                }
            },
            {
                path: 'privilegios',
                component: PrivilegieComponent,
                canActivate: [AuthGuardRouterService]
            },
            {
                path: 'privilegios/cadastrar',
                component: PrivilegieEditComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Cadastrar Privilegie'
                }
            },
            {
                path: 'privilegios/:id/editar',
                component: PrivilegieEditComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Editar Privilegie'
                }
            },
            {
                path: 'privilegios/:id/excluir',
                component: PrivilegieDeleteComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Excluir Privilegie'
                }
            },
            {
                path: 'privilegios/:id/view',
                component: PrivilegieViewComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Visualizar Privilegie'
                }
            },
            //usuarios
            {
                path: 'usuarios',
                component: UserComponent,
                canActivate: [AuthGuardRouterService]
            },
            {
                path: 'usuarios/cadastrar',
                component: UserEditComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Cadastrar User'
                }
            },
            {
                path: 'usuarios/:id/editar',
                component: UserEditComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Editar User'
                }
            },
            {
                path: 'usuarios/:id/excluir',
                component: UserDeleteComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Excluir User'
                }
            },
            {
                path: 'usuarios/:id/view',
                component: UserViewComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Visualizar User'
                }
            },
            //Cidades
            {
                path: 'cidades', component: CityComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Cidades'
                }
            },
            {
                path: 'cidades/cadastrar',
                component: CityEditComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Cadastrar Cidade'
                }
            },
            {
                path: 'cidades/:id/editar',
                component: CityEditComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Editar Cidade'
                }
            },

            {
                path: 'cidades/:id/excluir',
                component: CityDeleteComponent,
                canActivate: [AuthGuardRouterService],
                data: {
                    title: 'Excluir Cidade'
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
