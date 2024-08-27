import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //Aqui creamos variables
  //Nombre: TIPO = VALOR;
  //NOMBRE = clase(valor);
  persona = new FormGroup({
    //LLAVE: VALOR;
    rut: new FormControl('',[Validators.minLength(9),Validators.maxLength(10),Validators.required,Validators.pattern("[0-9]{7-8} - [0-9kK]{1}")]),
    nombre: new FormControl('', [Validators.minLength(3),Validators.required,Validators.pattern("[a-z]{3,5}")]),
    fecha_nacimiento: new FormControl(),
    genero: new FormControl()

  });

  constructor(private router: Router){}

  ngOnInit() {
  }

  //Aca podemos crear metodos
  //Ser explicito
  public registrar():void{
    //Validaciones? llamar un DAO? conversion?
    console.log(this.persona.value);
    alert("Registrao")
    this.router.navigate(['/login']);
  }
}
