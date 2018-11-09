import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../../shared/services/local-storage.service';
import {JwtTokenService} from '../../shared/services/jwt-token.service';
import {HttpClient} from '@angular/common/http';
import {MEAT_API} from '../../app.api';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public check: Boolean = false;
    public USER_KEY = "user";
    httpOptions;
    public user = {
        id:'',
        company_id:'',
        name: ""
    };
    public baseUrl = MEAT_API;
    constructor(
        public jwtToken: JwtTokenService,
        private http: HttpClient,
        public localStorage: LocalStorageService
    ) {
        this.check = this.jwtToken.token ? true : false;
        let userLocalStorage = this.localStorage.getObject(this.USER_KEY);
        this.user = userLocalStorage;
    }

    login(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/login`, data);
    }

    logout() {
        this.jwtToken.token = null;
        this.check = false;
        this.localStorage.remove(this.USER_KEY);
    }

    refreshToke() {
        console.log(this.localStorage.get(this.USER_KEY))
       // return this.http.post(`${this.baseUrl}/auth/login`, data);
    }

    private getUser() {
        return this.http.get(`${this.baseUrl}/auth/${this.localStorage.getObject(this.USER_KEY).id}`);
    }
}
