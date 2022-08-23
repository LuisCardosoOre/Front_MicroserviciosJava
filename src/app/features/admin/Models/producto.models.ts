export interface ProductoRequest {
    id: number;
    codigo: string;
    descripcion: string;
    precio: number;
    stock: number;
    tipo: string;
    url: string ;
    estado: string;
  }

export interface TipoProducto {
    codigo: string;
    descripcion: string;
}

export class  ProductoResponse{
    codigo: number;
    mensaje: string;
    fecha: Date;
    data: Producto[];
}

export class Producto {
    id: number;
    codigo: string ='';
    descripcion:string ='';
    precio: number;
    stock: number;
    tipo: string  ='';
    url: string  ='';
    estado?: string;

    constructor(){

    }

    get tipoDescripcion() {

        switch (this.tipo) {
            case 'C':
                return 'COLLAR';
            case 'P':
                return 'PULSERA';
            case 'A':
                return 'ARETES';
            case 'D':
                return 'DIJE';
            case 'B':
                return 'BRAZALETE';
            default:
                return '';
        }
    }


}

/*
export class Producto {
    id: number;
    codigo: string ='';
    descripcion:string ='';
    precio: number;
    stock: number;
    tipo: string  ='';
    url: string  ='';
    estado: string;

    constructor(){

    }

    get tipoDescripcion() {

        switch (this.tipo) {
            case 'C':
                return 'COLLAR';
            case 'P':
                return 'PULSERA';
            case 'A':
                return 'ARETES';
            case 'D':
                return 'DIJE';
            case 'B':
                return 'BRAZALETE';
            default:
                return '';
        }
    }


}*/
