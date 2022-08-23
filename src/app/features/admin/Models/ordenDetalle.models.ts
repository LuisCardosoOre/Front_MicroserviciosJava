import { Producto } from './producto.models';

export class OrdenDetalle {
    id: number;
    cantidad: number;
    precio: number;
    subtotal: number;
    producto: Producto;
    //orden: Orden;
    estado: string;

    constructor(){

    }

}

export class OrdenDetalleRequest {
  id?: number;
  cantidad?: number;
  precio?: number;
  subtotal?: number;
  idProducto?: number;
  estado?: string;
}

export class OrdenDTODetalle {
  id: number;
  cantidad: number;
  precio: number;
  subtotal: number;
  idProducto: String;
  estado: string;
  producto: Producto;

}
