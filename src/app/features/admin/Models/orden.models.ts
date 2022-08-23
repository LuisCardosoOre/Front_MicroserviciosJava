import { Cliente } from './cliente.models';
import { OrdenDetalle, OrdenDetalleRequest, OrdenDTODetalle } from './ordenDetalle.models';

export class Orden {
    id: number;
    fecha: string = '';
    total: number;
    cliente: Cliente;
    items: Array<OrdenDetalle> = [];

    estado: string;

    constructor(){
    }

    get estadoDescripcion() {

      switch (this.estado) {
          case '0':
              return 'CANCELADO';
          case '1':
              return 'PENDIENTE';
          case '2':
              return 'APROBADO';
          case '3':
              return 'ENVIANDO';
          case '4':
              return 'ENTREGADO';
          default:
              return '';
      }
  }

  get itemsLength(){
    return this.items.length;
  }
}

export interface CarritoRequest {
    id?: number;
    codigo?: string;
    image?: string;
    precio?: number;
    cantidad?: number;
}

export class  OrdenResponse{
    codigo: number;
    mensaje: string;
    fecha: Date;
    data: Orden[];
}

export class OrdenRequest {
  id?: number;
  fecha?: string;
  total?: number;
  idCliente?: number;
  items?: Array<OrdenDetalleRequest> = [];
  estado?: string;
}

export class  OrdenDTO{
  id: number;
  fecha: string = '';
  total: number;
  idCliente: string;
  items: Array<OrdenDTODetalle> = [];
  cliente: Cliente;
  estado: string;
}
