import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { OrdenService } from '../../commons/http/orden.service';
import { Orden, OrdenDTO } from '../../Models/orden.models';

@Component({
  templateUrl: './pedidos-aprobacion.component.html',
  styleUrls: ['./pedidos-aprobacion.component.scss']
})
export class PedidosAprobacionComponent implements OnInit {

  lstOrdenes: Orden[];
  loading: boolean = true;
  dialog: boolean = false;

  info: OrdenDTO;

  constructor(private ordenService: OrdenService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.ordenService.getPedidos()
    .pipe(finalize(() => this.loading = false))
    .subscribe((res: Orden[]) => {
      this.lstOrdenes = res;
      console.log(this.lstOrdenes.length);
    },
    (err) => {
      console.log(err);
    });
  }

  selectOrden(type: Orden) {
    //this.messageService.add({severity:'info', summary:'Selected', detail: type.id.toString()});
    this.ordenService.getOrdenById(type.id)
    .pipe(finalize(() => this.dialog = true))
    .subscribe((res: OrdenDTO) => {
      this.info = res;
    },
    (err) => {
      console.log(err);
    });
  }

  cerrarDialog() {
    this.dialog = false;
  }

  cancelar(id: number){
    this.ordenService.delete(id).subscribe(
      response => {
        console.log(response);
        this.lstOrdenes = this.lstOrdenes.filter(val => val.id !== id);
        this.dialog = false;
        this.messageService.add({severity: 'info', summary: 'Información', detail: response.toString(), life: 3000});
      },
      error => console.log('errror : ', error)
    );
  }

  aprobar(body: OrdenDTO){
    console.log(body);
    this.ordenService.aprobar(body).subscribe(
      response => {
        console.log(response);
        this.lstOrdenes = this.lstOrdenes.filter(val => val.id !== body.id);
        this.dialog = false;
        this.messageService.add({severity: 'info', summary: 'Información', detail: response.toString(), life: 3000});
      },
      error => console.log('errror : ', error)
    );
  }
}
