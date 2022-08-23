import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Orden } from '../../Models/orden.models';
import { Producto, ProductoResponse } from '../../Models/producto.models';
import { HttpModule } from './http.module'

@Injectable({
  providedIn: HttpModule
})
export class AprobacionService {

  constructor() { }
}
