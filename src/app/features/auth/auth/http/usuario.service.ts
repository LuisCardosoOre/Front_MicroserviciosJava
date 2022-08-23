import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.models';
import { HttpModule } from './http.module';

@Injectable({
  providedIn: HttpModule
})
export class UsuarioService {

  private apiServer = `${environment.api_cliente}/v1/clientes`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: new HttpParams()
  };


  constructor(private httpClient: HttpClient) { }

  public login(usuario: Usuario): any {
    const body = JSON.stringify(usuario);
    console.log(body);
    this.httpOptions.params = new HttpParams();
    return this.httpClient
      .post(this.apiServer + 'login', body, {
        observe: 'response'
      })
      .pipe(
        map((res) => {
          const token = res.headers.get('authorization');
          console.log('authorization token -> ' + token);
          sessionStorage.setItem('token', token);
          return res;
        })
      );
  }
}
