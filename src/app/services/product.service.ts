import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = 'http://localhost:5000/api/products';  
  constructor(private http:HttpClient) {
   }    

   addItem(prodImage: File,prodname: string,  prodcost: string, prodinfo: string): Observable<any> {
    var formData: any = new FormData();
    formData.append('prodimage', prodImage);
    formData.append('prodname', prodname);
    formData.append('prodcost', prodcost);
    formData.append('prodinfo', prodinfo);
    return this.http.post(`${this.baseURL}/additem`, formData, {
      reportProgress: true,
      observe: 'events',
    });
   }}