import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MEAT_API } from '../app.api';
import { AuthService } from '../admin/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class ResourcesService {

    public path = "";
    public params: HttpParams;

    constructor(
        private http: HttpClient,
        private authService: AuthService) { 

            this.params = new HttpParams()

        }

    public baseUrl = MEAT_API;

    build(searchTerm = null) {

        if (searchTerm) {

            this.params = new HttpParams()
                .append('between', searchTerm.between)
                .append('column', searchTerm.column)
                .append('limit', searchTerm.limit)
                .append('offSet', searchTerm.offSet)
                .append('order', searchTerm.order)
                .append('search', searchTerm.search)
                .append('start', searchTerm.start)
                .append('status', searchTerm.status)
                .append('end', searchTerm.end)
                .append('page', searchTerm.page)

        }
        return this;

    }

    parents(searchTerm = null) {

        if (searchTerm) {
            
            this.params = new HttpParams()
                .append('assets', searchTerm.assets)
                .append('parent', searchTerm.parent)
        }
        return this;

    }

    list(): Observable<any> {

        return this.http.get(

            `${this.baseUrl}${this.path}`, { params: this.params }

        );
    }


    getItem(id?: any): Observable<any> {

        return this.http.get(`${this.baseUrl}${this.path}/${id}`);

    }

    view(id?: any): Observable<any> {

        return this.http.get(`${this.baseUrl}${this.path}/${id}`);

    }

    select2(index:string,text:string,id?:string): Observable<any> {

        if(id){
            return this.http.get(`${this.baseUrl}${this.path}/select/${index}/${text}/${id}`);
        }
        return this.http.get(`${this.baseUrl}${this.path}/select/${index}/${text}`);

    }

    edit(id?: any): Observable<any> {

        return this.http.get(`${this.baseUrl}${this.path}/${id}/edit`);

    }

    getList(params?: any): Observable<any> {
        return this.http.get(
            `${this.baseUrl}${this.path}`
        );
    }

    post(data: any, file?: File): Observable<any> {

        const formData = new FormData();

        Object.keys(data).map(key => {

            formData.append(key, data[key]);

        });

        if (file) {

            formData.append('image', file, file.name);

        }

        formData.append('company_id', this.authService.user.company_id);

        return this.http.post(`${this.baseUrl}${this.path}/save`, formData);

        // return this.http.post(`${this.baseUrl}${this.path}/save`, formData, {
        //     reportProgress: true,
        //     observe: 'events'
        // });
    }

    delete(id: any): Observable<any> {

        return this.http.delete(`${this.baseUrl}${this.path}/${id}/delete`);

    }

    logout() {
        this.authService.jwtToken.token = null;
        this.authService.check = false;
        this.authService.localStorage.remove(this.authService.USER_KEY);
    }

    refreshToken() {
        this.authService.refreshToke();
    }

}
