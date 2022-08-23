import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from './commons/http/carrito.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']/*,
  providers: [CarritoService]*/
})
export class AdminComponent implements OnInit {

  constructor(public carritoService: CarritoService, private router: Router) { 
    this.carritoService.inicializarCarrito();
  }

  ngOnInit(): void {
  }

  pruer(){
    console.log('s');
  }

  mostratCarrito(){
    console.log('AQO');
    console.log(this.carritoService.cantidadCarrito);
   // sessionStorage.setItem('carrito', this.carritoService.obtenerCarrito());
    this.router.navigateByUrl('/administrador/carrito');
  }

  closeSession() {
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

}
