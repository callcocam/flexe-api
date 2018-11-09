import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {JwtTokenService} from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultRequestOptionsService {

    constructor(private jwtToken:JwtTokenService) { }

    public httpOptions;
    merge(queryString?:any) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json; charset=UTF-8',
                'Authorization':`Bearer ${this.jwtToken.token}`
            }),
            params: queryString
        }
        return this.httpOptions;
    }
}
