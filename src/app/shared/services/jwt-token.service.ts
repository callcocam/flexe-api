import { Injectable } from '@angular/core';
import {LocalStorageService} from './local-storage.service';
const TOKEN_KEY = 'token';
const COMPANY_KEY = 'token';
@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {


    constructor(private localStorage: LocalStorageService) {
    }

    get token() {
        return this.localStorage.get(TOKEN_KEY);
    }

    set token(value) {
        value ? this.localStorage.set(TOKEN_KEY, value) : this.localStorage.remove(TOKEN_KEY);
    }

    get company() {
        return this.localStorage.get(COMPANY_KEY);
    }

    set company(value) {
        value ? this.localStorage.set(COMPANY_KEY, value) : this.localStorage.remove(COMPANY_KEY);
    }
}
