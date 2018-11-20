import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders
} from '@angular/common/http';
import { JwtTokenService } from './jwt-token.service';

import { APP_KEY_CONPANY } from '../../app.api';
@Injectable()

export class Interceptor implements HttpInterceptor {

    constructor(private jwtToken: JwtTokenService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const dupReq = req.clone({
            headers:new HttpHeaders({
               //'Content-Type':  'charset=utf-8',
               // 'Content-Type':  'application/json; charset=utf-8',
                'Company-key':APP_KEY_CONPANY,
                'Authorization':`Bearer ${this.jwtToken.token}`
            })
        });
        return next.handle(dupReq);
    }
}
