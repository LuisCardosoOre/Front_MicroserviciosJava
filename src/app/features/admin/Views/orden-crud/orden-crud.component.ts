import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { CarritoService } from '../../commons/http/carrito.service';
import { ProductoService } from '../../commons/http/producto.service';
import { CarritoRequest } from '../../Models/orden.models';
import { Producto } from '../../Models/producto.models';

@Component({
  templateUrl: './orden-crud.component.html',
  styleUrls: ['./orden-crud.component.scss']
})
export class OrdenCrudComponent implements OnInit {

  products: Producto[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  loading: boolean = true;

  carrito: CarritoRequest;

  constructor(private productoService: ProductoService,
              private carritoService: CarritoService,
              private primengConfig: PrimeNGConfig) { 
                //this.carritoService.inicializarCarrito();
              }

  ngOnInit(): void {
    this.productoService.getAll()
    .pipe(finalize(() => this.loading = false))
    .subscribe((res) => {
      this.products = res;
      this.sortOptions = [
        {label: 'Precio Mayor a Menor', value: '!precio'},
        {label: 'Precio Menor a Mayor', value: 'precio'}
      ];
      this.primengConfig.ripple = true;
    },
    (err) => {
      console.log('s');
      console.log(err);
    });
  }

  sortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

  prueba(){
    this.carritoService.cantidadCarrito();
  }

  agregar(type: Producto) {
    console.log('PROD');
    console.log(type);

    this.carrito = {};
    this.carrito.id = type.id;
    this.carrito.codigo = type.codigo;
    this.carrito.cantidad = 1;
    this.carrito.precio = type.precio;
    this.carrito.image = type.url;

    console.log('REQ');
    console.log(this.carrito);

    this.carritoService.agregarCarrito(this.carrito);
  }

}
