import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './admin/auth/auth.module';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import locatePt from "@angular/common/locales/pt";
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { Interceptor } from './shared/services/interceptor.module';
registerLocaleData(locatePt, 'pt')

ToastDefaults.toast.position = 'centerTop'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        AuthModule,
        SharedModule.forRoot(),
        HttpClientModule,
        SnotifyModule,
        NgProgressModule.forRoot({
            min: 0.08,
            max: 1,
            ease: 'linear',
            speed: 200,
            trickleSpeed: 300,
            meteor: false,
            spinner: true,
            spinnerPosition: 'right',
            direction: 'rtl-',
            color: '#FFFFFF',
            thick: false
        }),
        NgProgressHttpModule.forRoot(),
    ],
    exports: [
        AdminModule,
        AuthModule,
        SharedModule
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'pt' },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
        SnotifyService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true,
    },
        Title],
    bootstrap: [AppComponent]
})
export class AppModule { }
