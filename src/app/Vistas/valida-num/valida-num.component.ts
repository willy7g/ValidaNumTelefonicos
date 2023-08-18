import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valida-num',
  templateUrl: './valida-num.component.html',
  styleUrls: ['./valida-num.component.css'],
})
export class ValidaNumComponent implements OnInit {
  inputText: string = '';
  message: string = '';
  primerosCuatroDigitos: string = '';
  cuatroDigitosConver: number | null = null;

  extractAndCheck() {
    console.log('entro el metodo');
    //capturamos los primeros Dos y cuatro Digitos
    const primeroDosNumeros = this.inputText.substr(0, 2);
    this.primerosCuatroDigitos = this.inputText.slice(0, 4);

    // Convertir a número entero
    this.cuatroDigitosConver = parseInt(this.primerosCuatroDigitos, 10);

    console.log('variable 4 caracteres ' + this.primerosCuatroDigitos);
    console.log('4 digitos convertido ' + this.cuatroDigitosConver);

    if (
      +primeroDosNumeros == 30 ||
      +primeroDosNumeros == 31 ||
      +primeroDosNumeros == 40 ||
      (this.cuatroDigitosConver >= 3200 && this.cuatroDigitosConver <= 3228) ||
      (this.cuatroDigitosConver >= 3230 && this.cuatroDigitosConver <= 3299) ||
      (this.cuatroDigitosConver >= 3300 && this.cuatroDigitosConver <= 3359) ||
      (this.cuatroDigitosConver >= 4476 && this.cuatroDigitosConver <= 4699) ||
      (this.cuatroDigitosConver >= 4773 && this.cuatroDigitosConver <= 4799) ||
      (this.cuatroDigitosConver >= 4800 && this.cuatroDigitosConver <= 4819)
    ) {
      this.message = 'TIGO';
    } else if (
      this.cuatroDigitosConver == 3229 ||
      +primeroDosNumeros == 41 ||
      +primeroDosNumeros == 42 ||
      +primeroDosNumeros == 43 ||
      (this.cuatroDigitosConver >= 3400 && this.cuatroDigitosConver <= 3499) ||
      (this.cuatroDigitosConver >= 3500 && this.cuatroDigitosConver <= 3564) ||
      (this.cuatroDigitosConver >= 4400 && this.cuatroDigitosConver <= 4475) ||
      (this.cuatroDigitosConver >= 4700 && this.cuatroDigitosConver <= 4772)
    ) {
      this.message = 'CLARO';
    } else {
      this.message = 'no encontramos tu numero es nuestra Base de Datos';
    }

    /*
    if (this.cuatroDigitosConver >= 3230 && this.cuatroDigitosConver<=3299) {
      this.message = 'TIGO';
    } else if(+primeroDosNumeros==41 || +primeroDosNumeros==42 ||+primeroDosNumeros==43){
      
      this.message = 'CLARO';
    }else{
      this.message = 'no encontramos tu numero es nuestra Base de Datos';
    }

    */
  }

  //hola este comentarioe s para validar que aqui
  //estube
  //:YO

  constructor() {}

  ngOnInit(): void {}
}
