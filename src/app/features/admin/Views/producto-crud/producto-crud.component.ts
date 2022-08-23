import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { ProductoService } from '../../commons/http/producto.service';
import { Producto, TipoProducto } from '../../Models/producto.models';

@Component({
  templateUrl: './producto-crud.component.html',
  styleUrls: ['./producto-crud.component.scss']
})
export class ProductoCrudComponent implements OnInit {

  dialog: boolean;
  lstProductos: Producto[];
  producto: Producto;
  selectedProducto: Producto[];

  lstTipoProducto: TipoProducto[];

  form: FormGroup;

  submitted: boolean;
  loading: boolean = true;
  editar: boolean;

  columns = [];
  filtros = [];
  titulo = 'Lista de Productos';

  constructor(private productoService: ProductoService,
              private fb: FormBuilder,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
      this.form = this.fb.group({
        codigo: ['', Validators.required],
        descripcion: ['', Validators.required],
        precio: ['', Validators.required],
        stock: ['', Validators.required],
        tipo: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    this.productoService.getAll()
    .pipe(finalize(() => this.loading = false))
    .subscribe((res) => {
      this.lstProductos = res;
      this.editar = false;
      this.columns = [
        { cuerpo: 'codigo', cabecera: 'Codigo' },
        { cuerpo: 'descripcion', cabecera: 'Descripción' },
        { cuerpo: 'precio', cabecera: 'Precio' },
        { cuerpo: 'stock', cabecera: 'Stock' },
        { cuerpo: 'tipo', cabecera: 'Tipo' },
        { cuerpo: '', cabecera: 'Acciones' }
      ];
      this.filtros = ['codigo', 'descripcion'];
      this.lstTipoProducto  = [
        { codigo: 'C', descripcion: 'COLLAR'  },
        { codigo: 'P', descripcion: 'PULSERA' },
        { codigo: 'A', descripcion: 'ARETES' },
        { codigo: 'D', descripcion: 'DIJE' },
        { codigo: 'B', descripcion: 'BRAZALETE' }
      ];
    },
    (err) => {
      console.log('s');
      console.log(err);
    });

    /*this.productoService.getAll()
    .pipe(finalize(() => this.loading = false))
    .subscribe((res) => {
      console.log(res);
      console.log('ss');
      this.lstProductos = res;
      console.log(this.lstProductos);
      //console.log(res.data);
    },
    (err) => {
      console.log('s');
      console.log(err);
    });*/
  }

  updateFormValues(type: Producto) {
    this.form.patchValue({
      codigo: type.codigo,
      descripcion: type.descripcion,
      precio: type.precio,
      stock: type.stock,
      tipo: this.lstTipoProducto.find(x => x.codigo === type.tipo).codigo
    });
    console.log(this.lstTipoProducto.find(x => x.codigo === type.tipo));
    console.log(this.lstTipoProducto);
    console.log(this.form.controls['tipo'].value);
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  nuevo() {
    this.producto = new Producto();
    this.submitted = false;
    this.dialog = true;
    this.editar = false;
    this.form.reset();
  }

  actualizar(type: Producto) {
    this.producto = type;
    this.dialog = true;
    this.editar = true;
    this.updateFormValues(this.producto);
  }

  cerrarDialog() {
    this.dialog = false;
    this.submitted = false;
  }

  eliminar(type: Producto) {
    this.confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar ' + type.descripcion + '?',
        header: 'Confirmación',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'SI',
        rejectLabel: 'NO',
        accept: () => {
            this.productoService.delete(type.id).subscribe(
              response => {
                this.lstProductos = this.lstProductos.filter(val => val.id !== type.id);
                this.producto = new Producto();
                this.messageService.add({severity: 'info', summary: 'Información', detail: response.toString(), life: 3000});
              },
              error => console.log('errror : ', error)
            );
        }
    });
  }

  guardar() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value);
      this.producto.codigo = this.form.value.codigo;
      this.producto.descripcion = this.form.value.descripcion;
      this.producto.precio = this.form.value.precio;
      this.producto.stock = this.form.value.stock;
      this.producto.tipo = this.form.value.tipo;
      this.producto.url = 'https://joyeria-deyali.com/wp-content/uploads/2020/02/TARJETA2-400x400.png';
      this.producto.estado = '1';
      console.log(this.producto);
      if (this.editar){

        let indice = this.findIndexById(this.producto.id);
        if (indice >= 0){
          this.productoService.update(this.producto.id, this.producto).subscribe(
            response => {
              this.lstProductos[indice] = this.producto;
              this.actualizarVariables();
              this.messageService.add({severity: 'success', summary: 'Exito', detail: response.toString(), life: 3000});
            },
            error => console.log('errror : ', error)
          );
        } else {
          this.messageService.add({severity: 'warn', summary: 'Advertencia', detail: 'El código es diferente al inicial', life: 3000});
        }
      } else {
        this.productoService.create(this.producto).subscribe(
          response => {
            this.lstProductos.push(this.producto);
            this.actualizarVariables();
            this.messageService.add({severity: 'success', summary: 'Exito', detail: response.toString(), life: 3000});
          },
          error => console.log('errror : ', error)
        );

      }
    }
  }

  actualizarVariables(){
    this.lstProductos = [...this.lstProductos];
    this.dialog = false;
    this.editar = false;
    this.producto = new Producto();
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.lstProductos.length; i++) {
        if (this.lstProductos[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
  }
}
