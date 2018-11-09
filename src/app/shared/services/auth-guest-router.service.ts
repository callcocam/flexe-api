import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../component/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuestRouterService  implements CanActivate {

    constructor(private authService: AuthService, private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        if(this.authService.check){
            this.route.navigate(['admin/dashboard'])
            return false;
        }
        return true;
    }
}
