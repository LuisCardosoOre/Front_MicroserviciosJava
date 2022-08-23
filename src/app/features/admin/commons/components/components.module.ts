import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { UiModule } from '../ui/ui.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CarritoService } from '../http/carrito.service';
import { MenuComponent } from './menu/menu.component';

const COMPONENTS = [
  TablaComponent,
  CatalogoComponent,
  MenuComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  exports : [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class ComponentsModule { }
