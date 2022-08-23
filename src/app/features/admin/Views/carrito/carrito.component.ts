import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from '../../admin.component';
import { CarritoService } from '../../commons/http/carrito.service';
import { CarritoRequest, Orden, OrdenRequest } from '../../Models/orden.models';
import { Cliente } from '../../Models/cliente.models';
import { OrdenDetalle, OrdenDetalleRequest } from '../../Models/ordenDetalle.models';
import { Producto } from '../../Models/producto.models';
import { CompraService } from '../../commons/http/compra.service';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']/*,
  providers: [CarritoService]*/
})
export class CarritoComponent implements OnInit {

  lstCarritoComprar: CarritoRequest[];
  orden: OrdenRequest;
  lst: OrdenDetalleRequest[] = [];

  constructor(public admin: AdminComponent,
              private comprarService: CompraService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit(): void {
    ///this.lstCarritoComprar = this.carritoService.obtenerCarrito();
    //console.log(this.carritoService2.lstCarrito);
    this.lstCarritoComprar = this.admin.carritoService.obtenerCarrito();
  }

  prueba(){
    console.log('prueba');
    //this.carritoService.cantidadCarrito();
    let x = new Date();
    console.log(x);/*
    let s = this.datePipe.transform(x, 'yyyy-MM-dd');
    console.log(s);
    let w = this.datePipe.transform(x, 'dd/MM/yyyy');
    console.log(w);*/
  }

  regresarCatalogo(){
    this.router.navigateByUrl('/administrador/orden');
  }

  procesarCompra(){
    let pagarT = this.obtenerTotalPagar();
/*
    let cliente = new Cliente();
    cliente.id = 1;*/

    this.orden = new OrdenRequest();
    this.orden.estado = '1';
    this.orden.fecha = '19/08/2022';
    this.orden.total = pagarT;
    this.orden.idCliente = 1;
    this.orden.items = this.lst;

    console.log(this.orden);

    this.comprarService.create(this.orden).subscribe(response => {
      this.limpiar();
      this.messageService.add({severity: 'success', summary: 'Exito', detail: response.toString(), life: 3000});
    },
    error => console.log('errror : ', error));

  }


  obtenerTotalPagar(){
    let total = 0;
    let detalle;
    let producto;
    for (let i = 0; i < this.lstCarritoComprar.length; i++) {
        total = total + (this.lstCarritoComprar[i].precio * this.lstCarritoComprar[i].cantidad);
       /* producto = new Producto();
        producto.id = this.lstCarritoComprar[i].id;
        producto.codigo = this.lstCarritoComprar[i].codigo;*/
        detalle = new OrdenDetalleRequest();
        detalle.estado = '1';
        detalle.cantidad = this.lstCarritoComprar[i].cantidad;
        detalle.precio = this.lstCarritoComprar[i].precio ;
        detalle.subtotal = this.lstCarritoComprar[i].precio * this.lstCarritoComprar[i].cantidad;
        detalle.idProducto = this.lstCarritoComprar[i].id;
        this.lst.push(detalle);
    }
    return total;
  }

  limpiar(){
    this.lstCarritoComprar = [];
    this.admin.carritoService.inicializarCarrito();
    this.regresarCatalogo();
  }

}
