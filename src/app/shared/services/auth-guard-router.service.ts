import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../admin/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardRouterService  implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(this.authService.check){
            return true;
        }
        this.router.navigate(['admin/auth'])
        return false;
    }
}
