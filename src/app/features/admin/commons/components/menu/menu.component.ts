import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
      label: 'Opereción',
      icon: 'pi pi-fw pi-bookmark',
      items: [
          {
              label: 'Catalogo',
              icon: 'pi pi-fw pi-file',
              routerLink : ['/administrador/orden']
          },
          {
              label: 'Ordenes',
              icon: 'pi pi-fw pi-file',
              routerLink : ['/administrador/ordenes']
          },
          {
              label: 'Aprobar',
              icon: 'pi pi-fw pi-file',
              routerLink : ['/administrador/aprobar']
          }/*,
          {
              label: 'CLASE',
              icon: 'pi pi-fw pi-file',
              routerLink : ['/administrador/clase']
          },
          {
              label: 'C.P.C',
              icon: 'pi pi-fw pi-file',
              routerLink : ['/administrador/cpc']
          },
          {
              label: 'ANDINA',
              icon: 'pi pi-fw pi-file',
              routerLink : ['/administrador/andina']
          },
          {
              label: 'NACIONAL',
              icon: 'pi pi-fw pi-file',
              routerLink : ['/administrador/nacional']
          }*/
      ]
      },
      {
      label: 'Mantenimiento',
      icon: 'pi pi-fw pi-pencil',
      items: [
          {
              label: 'Productos',
              icon: 'pi pi-fw pi-plus',
              routerLink : ['/administrador/productos']
          }
      ]
      }
    ];
  }


}
