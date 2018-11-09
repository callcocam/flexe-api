import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }
    redirectAfterLogin = ['/admin/auth/login'];
  ngOnInit() {

      this.authService.logout();
      setTimeout(()=>{
          this.router.navigate(this.redirectAfterLogin)
      },1000)
  }

}
