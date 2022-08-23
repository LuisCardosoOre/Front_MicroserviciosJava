import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  @Input() titulo: string;
  @Input() datos: any[];
  @Input() cols: any[];
  @Input() filtro: any[];
  @Input() loading: boolean;
  @Output() nuevo: EventEmitter<any> = new EventEmitter();
  @Output() editar: EventEmitter<object> = new EventEmitter<object>();
  @Output() eliminar: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

}
