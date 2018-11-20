import { Injectable } from '@angular/core';
import {  Title } from '@angular/platform-browser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MEAT_API } from '../app.api';
import { AuthService } from '../admin/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})
export class ResourcesService {

    public path = "";
    public params: HttpParams;
    public company: any
    public services: any

    constructor(
        private http: HttpClient,
        private authService: AuthService,
        private titleService: Title) { 

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

    
    search(searchTerm = null): Observable<any> {

        if (searchTerm) {
            
            this.params = new HttpParams()
                .append('key', searchTerm.key)
                .append('value', searchTerm.value)
        }
        return this.http.get(

            `${this.baseUrl}/api${this.path}/search`, { params: this.params }

        );

    }

    list(): Observable<any> {

        return this.http.get(

            `${this.baseUrl}/api${this.path}`, { params: this.params }

        );
    }


    getItem(id?: any): Observable<any> {

        return this.http.get(`${this.baseUrl}/api${this.path}/${id}`);

    }

    view(id?: any): Observable<any> {

        return this.http.get(`${this.baseUrl}/api${this.path}/${id}/view`);

    }

    select2(index:string,text:string,id?:string): Observable<any> {

        if(id){
            return this.http.get(`${this.baseUrl}/api${this.path}/select/${index}/${text}/${id}`);
        }
        return this.http.get(`${this.baseUrl}/api${this.path}/select/${index}/${text}`);

    }

    edit(id?: any): Observable<any> {

        return this.http.get(`${this.baseUrl}/api${this.path}/${id}/edit`);

    }

    getList(params?: any): Observable<any> {
        return this.http.get(
            `${this.baseUrl}/api${this.path}`
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

        console.log(this.authService.user.company_id)

        formData.append('company_id', this.authService.user.company_id);

        return this.http.post(`${this.baseUrl}/api${this.path}/save`, formData);

        // return this.http.post(`${this.baseUrl}${this.path}/save`, formData, {
        //     reportProgress: true,
        //     observe: 'events'
        // });
    }

    delete(id: any): Observable<any> {

        return this.http.delete(`${this.baseUrl}/api${this.path}/${id}/delete`);

    }

    logout() {
        this.authService.jwtToken.token = null;
        this.authService.check = false;
        this.authService.localStorage.remove(this.authService.USER_KEY);
    }

    refreshToken() {
        this.authService.refreshToke();
    }


    
  getErrors(formGroup: FormGroup, errors: any = {}) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        errors[field] = control.errors;
      } else if (control instanceof FormGroup) {
        errors[field] = this.getErrors(control);
      }
    });
    return errors;
  }

  addService(service){

    this.services = service

  }
  
  getCompany(company){
	  
	  this.company = company
	  
  }
	  
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

   public src( src: string) {
    return  `${this.baseUrl}${src}`;
  }

}
