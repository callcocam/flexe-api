import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuardRouterService } from './shared/services/auth-guard-router.service';
import { ContentComponent } from './admin/content/content.component';
import { DashboardComponent } from './admin/content/dashboard.component';
import { AboutComponent } from './admin/about/about.component';



import {
    CompanieEditComponent,
    CompanieComponent,
    CompanieViewComponent,
    CompanieDeleteComponent
} from './admin/operational/companie';

import {
    UserComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserViewComponent
} from './admin/operational/user';
import {
    ProjectComponent,
    ProjectViewComponent,
    ProjectEditComponent,
    ProjectDeleteComponent
} from './admin/obras/project';
import { ProjetoComponent } from './home/projeto/projeto.component';
import { ProjetosComponent } from './home/projetos/projetos.component';
import { HomeComponent } from './home/home.component';
import { ContratoComponent } from './home/projeto/contrato/contrato.component';
import { LicitacaoComponent } from './home/projeto/licitacao/licitacao.component';
import { ExecucaoComponent } from './home/projeto/execucao/execucao.component';
import { ConclusaoComponent } from './home/projeto/conclusao/conclusao.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { ConcluidosComponent } from './home/projetos/concluidos/concluidos.component';
import { RelatorioComponent } from './home/projeto/relatorio/relatorio.component';

import {AuthComponent} from './admin/auth/auth.component';
import {LoginComponent} from './admin/auth/login.component';
import {ForgotComponent} from './admin/auth/forgot.component';
import {AuthGuestRouterService} from './shared/services/auth-guest-router.service';
import {LogoutComponent} from './admin/auth/logout.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'projetos', pathMatch: 'full' },
            {
                path: 'projetos',
                component: ProjetosComponent,
                data: {
                    title: 'Visualizar Projeto'
                },
                 children: [
                 ]
            },
            {
                path: 'concluidos',
                component: ConcluidosComponent,
                data: {
                    title: 'Visualizar Concludos'
                }
            },
            {
                path: 'projeto/:id',
                component: ProjetoComponent,
                data: {
                    title: 'Visualizar Projeto'
                },
                children: [
                    { path: '', redirectTo: 'contrato', pathMatch: 'full' },
                    {
                        path: 'contrato',
                        component: ContratoComponent,
                        data: {
                            title: 'Contrato'
                        }
                    },
                    {
                        path: 'licitacao',
                        component: LicitacaoComponent,
                        data: {
                            title: 'Licitação'
                        }
                    },
                    {
                        path: 'execucao',
                        component: ExecucaoComponent,
                        data: {
                            title: 'Execução'
                        }
                    },
                    {
                        path: 'conclusao',
                        component: ConclusaoComponent,
                        data: {
                            title: 'Licitação'
                        }
                    },
                    {
                        path: 'relatorio',
                        component: RelatorioComponent,
                        data: {
                            title: 'Relatótrio'
                        }
                    },
                ]
            }
        ]
    },

    {
        path: 'admin', component: ContentComponent,
        canActivate: [AuthGuardRouterService],
        children: [
            { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
            {path: 'dashboard',component: DashboardComponent,canActivate: [AuthGuardRouterService]},
            { path: 'sobre',component: AboutComponent,canActivate: [AuthGuardRouterService]},
            //Companias
            {
                path: 'empresa',
                component: CompanieComponent,
                canActivate: [AuthGuardRouterService],
                children: [
                    { path: '', redirectTo: 'listar', pathMatch: 'full' },
                        {path: 'listar',component: CompanieViewComponent,canActivate: [AuthGuardRouterService],data: {title: 'Cadastrar Empresa'}
                    },
                        {path: 'cadastrar',component: CompanieEditComponent,canActivate: [AuthGuardRouterService],data: {title: 'Cadastrar Empresa'}
                    },
                    {path: ':id/editar',component: CompanieEditComponent,canActivate: [AuthGuardRouterService],data: {title: 'Editar Empresa'},},
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
            {
                path: 'projetos',
                component: ProjectComponent,
                canActivate: [AuthGuardRouterService],
                children: [
                    { path: '', redirectTo: 'listar', pathMatch: 'full' },
                    {
                        path: 'listar',
                        component: ProjectViewComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Cadastrar Project'
                        }
                    },
                    {
                        path: 'cadastrar',
                        component: ProjectEditComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Cadastrar Project'
                        }
                    },
                    {
                        path: ':id/editar',
                        component: ProjectEditComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Editar Project'
                        }
                    },
                    {
                        path: ':id/excluir',
                        component: ProjectDeleteComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Excluir Project'
                        }
                    }
                    //empres contact
                ]
            },
            {
                path: 'usuarios',
                component: UserComponent,
                canActivate: [AuthGuardRouterService],
                children: [
                    { path: '', redirectTo: 'listar', pathMatch: 'full' },
                    //usuarios
                    {
                        path: 'listar',
                        component: UserViewComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Listar Usuários'
                        }
                    },
                    {
                        path: 'cadastrar',
                        component: UserEditComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Cadastrar Usuários'
                        }
                    },
                    {
                        path: ':id/editar',
                        component: UserEditComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Editar Usuários'
                        }
                    },
                    {
                        path: ':id/excluir',
                        component: UserDeleteComponent,
                        canActivate: [AuthGuardRouterService],
                        data: {
                            title: 'Excluir Usuários'
                        }
                    }
                ]
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
