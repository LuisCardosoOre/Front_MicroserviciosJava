import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../http/usuario.service';
import { Usuario } from '../models/usuario.models';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  frmLogin: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router ) { }

  ngOnInit(): void {
    this.frmLogin = this.formBuilder.group({
      usuario: ['ADMIN', [Validators.required, Validators.minLength(5)]],
      clave: ['123', [Validators.required, Validators.minLength(5)]]
    });
    sessionStorage.setItem('swLogin', 'false' );
  }

  onSubmit() {
    sessionStorage.setItem('swLogin', 'false' );

    const usuario = this.f.usuario.value;
    const clave   = this.f.clave.value;

    const oUsuario: Usuario = new Usuario(usuario, clave);

    sessionStorage.setItem('swLogin', 'true' );
    this.router.navigateByUrl('/administrador');
/*
    this.usuarioService.login(oUsuario)
      .subscribe((response) => {
          sessionStorage.setItem('swLogin', 'true' );
          this.router.navigateByUrl('/administrador');
          console.log('Login OK');
          console.log('response' + response);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
          }
        });
  */
  }

  get f() {
    return this.frmLogin.controls;
  }

}
