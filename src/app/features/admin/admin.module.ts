import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CommonsModule } from './commons/commons.module';
import { ProductoCrudComponent } from './Views/producto-crud/producto-crud.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { OrdenCrudComponent } from './Views/orden-crud/orden-crud.component';
import { CarritoComponent } from './Views/carrito/carrito.component';
import { CarritoService } from './commons/http/carrito.service';
import { OrdenesComponent } from './Views/ordenes/ordenes.component';
import { PedidosAprobacionComponent } from './Views/pedidos-aprobacion/pedidos-aprobacion.component';



@NgModule({
  declarations: [AdminComponent, ProductoCrudComponent, OrdenCrudComponent, CarritoComponent, OrdenesComponent, PedidosAprobacionComponent],
  imports: [
    CommonModule,
    CommonsModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]/*,
  providers: [CarritoService]*/
})
export class AdminModule { }
