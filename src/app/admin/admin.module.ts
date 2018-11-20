import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OperationalModule} from '../admin/operational/operational.module';
import {ContentComponent} from './content/content.component';
import {AboutComponent} from '../admin/about/about.component';
import {HeaderComponent} from './content/header.component';
import {SidebarComponent} from './content/sidebar.component';
import {FooterComponent} from './content/footer.component';
import {DashboardComponent} from './content/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ObrasModule } from './obras/obras.module';
import { StylesComponent } from './content/styles.component';

@NgModule({
    imports: [
        CommonModule,
        OperationalModule,
        ObrasModule,
        SharedModule,
        RouterModule
    ],
    declarations: [
        ContentComponent,
        DashboardComponent,
        AboutComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        StylesComponent
    ],
    exports:[
    ]
})
export class AdminModule { }
