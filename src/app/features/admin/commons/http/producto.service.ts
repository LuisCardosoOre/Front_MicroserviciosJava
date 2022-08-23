import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Producto, ProductoResponse } from '../../Models/producto.models';
import { HttpModule } from './http.module';

@Injectable({
  providedIn: HttpModule
})
export class ProductoService {

  private apiServer = `${environment.api_producto}/v1/productos`;
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
    //.set('authorization', sessionStorage.getItem('token'))
  };

  constructor(private httpClient: HttpClient) { }
/*
  getAll() {
    return this.httpClient.get(this.apiServer + 'productos').pipe(map(res => res));
  }*/
/*
  getAll() {
    return this.httpClient.get(this.apiServer + 'productos').pipe(
      map((instructorsRes: ProductoResponse) => {
        return instructorsRes;
      })
    );
  }
*/
/*
getAll() {
  return this.httpClient.get(this.apiServer + 'productos').pipe(
    map((instructorsRes: ProductoResponse) => {
      return instructorsRes.data;
    })
  );
}*/

  getAll(): Observable<Producto[]> {
    return this.httpClient.get<ProductoResponse>(this.apiServer, this.httpOptions).pipe(
      map((instructorsRes: ProductoResponse) => {
        return instructorsRes.data;
      })
    );
  }

  /*
    getAll(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.apiServer + 'productos').pipe(map(data => data));
  }
  */

  create(body: Producto) {
    return this.httpClient.post(this.apiServer, JSON.stringify(body), this.httpOptions);
  }
  update(id: number, body: Producto) {
    console.log(id);
    console.log(body);
    return this.httpClient.put(this.apiServer + '/' + id, JSON.stringify(body), this.httpOptions);

  }

  delete(id: number){
    return this.httpClient.delete(this.apiServer + '/' + id, this.httpOptions).pipe(map(data => data));
  }
}
