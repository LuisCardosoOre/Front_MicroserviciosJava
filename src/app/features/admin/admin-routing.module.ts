import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CarritoComponent } from './Views/carrito/carrito.component';
import { OrdenCrudComponent } from './Views/orden-crud/orden-crud.component';
import { OrdenesComponent } from './Views/ordenes/ordenes.component';
import { PedidosAprobacionComponent } from './Views/pedidos-aprobacion/pedidos-aprobacion.component';
import { ProductoCrudComponent } from './Views/producto-crud/producto-crud.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'orden'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'productos', component: ProductoCrudComponent },
      { path: 'orden', component: OrdenCrudComponent},
      { path: 'carrito', component: CarritoComponent},
      { path: 'ordenes', component: OrdenesComponent},
      { path: 'aprobar', component: PedidosAprobacionComponent}/*,
      { path: 'andina', component: AndinaComponent},
      { path: 'nacional', component: NacionalComponent},
      { path: 'equivalencia', component: EquivalenciaComponent},
      { path: 'equivalencia/crear', component: EquivalenciaCreateComponent},
      { path: 'prueba', component: PruebaComponent}*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
