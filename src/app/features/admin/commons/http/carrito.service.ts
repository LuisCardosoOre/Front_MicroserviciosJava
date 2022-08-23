import { Injectable } from '@angular/core';
import { CarritoRequest } from '../../Models/orden.models';
import { Producto } from '../../Models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  lstCarrito: CarritoRequest[];
  notificacion: number = 0;

  static  lst: CarritoRequest[];

  constructor() {
    //this.lstCarrito = [];
  }

  cantidadCarrito(){
    console.log('Cantidad' + this.lstCarrito.length);
    this.notificacion = this.lstCarrito.length;
  }

  inicializarCarrito(){
    this.lstCarrito = [];
    this.notificacion = 0;
  }

  obtenerCarrito(): CarritoRequest[]{
    return [...this.lstCarrito];
  }

  agregarCarrito(type: CarritoRequest){
    let indice = this.findIndexById(type.id);
    if (indice >= 0){
      let oType = this.lstCarrito[indice];
      let cantidadNueva = oType.cantidad + type.cantidad;
      oType.cantidad = cantidadNueva;
      this.lstCarrito[indice] = oType;

      this.lstCarrito = [...this.lstCarrito];
    }else{
      this.lstCarrito.push(type);
    }
    this.cantidadCarrito();
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.lstCarrito.length; i++) {
        if (this.lstCarrito[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
  }
}
