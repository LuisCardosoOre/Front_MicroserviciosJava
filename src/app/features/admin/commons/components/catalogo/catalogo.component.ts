import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { Producto } from '../../../Models/producto.models';
import { ProductoService } from '../../http/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  @Input() sortField: string;
  @Input() datos: any[];
  @Input() sortOptions: any[];
  @Input() sortOrder: number;
  @Input() loading: boolean;
  @Output() agregar: EventEmitter<any> = new EventEmitter();
  @Output() sortChange: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


}
