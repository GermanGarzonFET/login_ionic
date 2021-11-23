import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm={
    "correo":"",
    "contrasenia":""
  }

  datosUser={
    "correo":"garzonto@fet",
    "contrasenia":"12345"
  }

  message=""

  constructor(private router: Router) { }

  ngOnInit() {
  }

  comparePass(){

    if(this.loginForm.correo===""){
      this.message="Digite un correo"

    }
    else if(this.loginForm.contrasenia===""){
      this.message="Digite una contraseña"

    }
    else if (this.loginForm.correo=== this.datosUser.correo) {
        if (this.loginForm.contrasenia=== this.datosUser.contrasenia) {
          this.router.navigateByUrl('/inicio');
        }
    }else{
      this.message="Contraseña o correo incorrecto"
    }

  }

}
