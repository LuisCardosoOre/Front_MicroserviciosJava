import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { OrdenService } from '../../commons/http/orden.service';
import { Orden } from '../../Models/orden.models';

@Component({
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class OrdenesComponent implements OnInit {

  lstOrdenes: Orden[];
  loading: boolean = true;

  constructor(private ordenService: OrdenService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.ordenService.getAll()
    .pipe(finalize(() => this.loading = false))
    .subscribe((res: Orden[]) => {
      this.lstOrdenes = res;
    },
    (err) => {
      console.log(err);
    });
  }

  eliminar(type: Orden) {
    console.log(type);
    this.confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar registro ' + type.fecha + '-' + type.total + ' ?',
        header: 'Confirmación',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'SI',
        rejectLabel: 'NO',
        accept: () => {
            this.ordenService.delete(type.id).subscribe(
              response => {
                console.log(response);
                this.lstOrdenes = this.lstOrdenes.filter(val => val.id !== type.id);
                this.messageService.add({severity: 'info', summary: 'Información', detail: response.toString(), life: 3000});
              },
              error => console.log('errror : ', error)
            );
        }
    });
  }

}
