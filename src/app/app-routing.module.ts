import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { operacionalRoutes } from './admin/operational/operational-routing.module';
import { cityRoutes } from './admin/operational/city/city-routing.module';
import { AuthGuardRouterService } from './shared/services/auth-guard-router.service';
import { roleRoutes } from './admin/operational/role/role-routing.module';
import { prvilegieRoutes } from './admin/operational/privilegie/privilegie-routing.module';
import { resourceRoutes } from './admin/operational/resource/resource-routing.module';
import { companieRoutes } from './admin/operational/companie/companie-routing.module';
import { userRoutes } from './admin/operational/user/user-routing.module';
import { ContentComponent } from './content/content.component';


operacionalRoutes.push(...cityRoutes)
operacionalRoutes.push(...companieRoutes)
operacionalRoutes.push(...roleRoutes)
operacionalRoutes.push(...resourceRoutes)
operacionalRoutes.push(...prvilegieRoutes)
operacionalRoutes.push(...userRoutes)

const routes: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    {
        path: 'admin', component: ContentComponent,
        canActivate: [AuthGuardRouterService],
        children: operacionalRoutes
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
