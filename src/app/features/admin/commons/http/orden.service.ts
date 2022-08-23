import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Orden, OrdenDTO, OrdenResponse } from '../../Models/orden.models';
import { Producto, ProductoResponse } from '../../Models/producto.models';
import { HttpModule } from './http.module';

@Injectable({
  providedIn: HttpModule
})
export class OrdenService {

  private apiServer = `${environment.api_orden}/v1/ordenes`;
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
    //.set('authorization', sessionStorage.getItem('token'))
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Orden[]> {
    return this.httpClient.get<OrdenResponse>(this.apiServer, this.httpOptions).pipe(
      map((instructorsRes: OrdenResponse) => {
        return instructorsRes.data;
      })
    );
  }

  getPedidos(): Observable<Orden[]> {
    return this.httpClient.get<OrdenResponse>(`${this.apiServer}/procesar`, this.httpOptions).pipe(
      map((instructorsRes: OrdenResponse) => {
        return instructorsRes.data;
      })
    );
  }

  delete(id: number){
    return this.httpClient.delete(this.apiServer + '/' + id, this.httpOptions).pipe(map(data => data));
  }

  getOrdenById(id: number): Observable<OrdenDTO> {
    return this.httpClient.get<OrdenDTO>(this.apiServer + '/' + id, this.httpOptions).pipe(map(data => data));
  }


  aprobar(body: OrdenDTO){
    return this.httpClient.post(`${this.apiServer}/aprobar`, JSON.stringify(body) ,this.httpOptions);
  }
}
