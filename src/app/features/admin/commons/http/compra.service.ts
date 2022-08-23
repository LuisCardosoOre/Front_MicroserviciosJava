import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Orden, OrdenRequest } from '../../Models/orden.models';
import { Producto, ProductoResponse } from '../../Models/producto.models';
import { HttpModule } from './http.module';

@Injectable({
  providedIn: HttpModule
})
export class CompraService {

  private apiServer = `${environment.api_orden}/v1/ordenes`;
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
    //.set('authorization', sessionStorage.getItem('token'))
  };

  constructor(private httpClient: HttpClient) { }

  create(body: OrdenRequest) {
    console.log(JSON.stringify(body));
    return this.httpClient.post(`${this.apiServer}/comprar`, JSON.stringify(body), this.httpOptions);
  }
}
