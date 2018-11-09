import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {NotificationService} from '../../shared/messages/notification.service';
import { AuthService } from './auth.service';
import { SnotifyService, Snotify } from 'ng-snotify';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup

    emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    redirectAfterLogin = '/admin/dashboard';

    constructor(  private formBuilder: FormBuilder,
                  private authService: AuthService,
                 // public notificationService:NotificationService,
                  public alert:SnotifyService) { }
    /*
      Change global configuration
       */

    ngOnInit() {

        this.loginForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
            password: this.formBuilder.control('', [Validators.required])
        })

    }

    login(data){
        this.authService.login(data)
            .subscribe((response) => {

                //this.notificationService.notify(response.error);

                if(response.result===5){

                    this.authService.check = true

                    this.authService.jwtToken.token = response.token

                    this.authService.localStorage.setObject(this.authService.USER_KEY,response.user)            
                  
                    this.alert.success(response.error,"Seja Bem Vindo").on('beforeHide',(toast: Snotify) => {

                        window.location.href = this.redirectAfterLogin

                      } );
                }
                else{
                    this.alert.error(response.error);
                }

            })
    }

}
