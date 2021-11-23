import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data_login ={
    "nombre":"",
    "correo":"",
    "contrasenia":""
  }
  confirem_contrasenia ="";
  compare="";

  data =[];



  constructor() {
  }

  comparar(){
    if (this.data_login.contrasenia==="") {
      this.compare="Digite una contraseña";
    }
    else if(this.confirem_contrasenia==this.data_login.contrasenia){
      this.compare="Contraseña Correcta";
    }else{
      this.compare="Las contraseñas no coinciden";
    }
  }


}
