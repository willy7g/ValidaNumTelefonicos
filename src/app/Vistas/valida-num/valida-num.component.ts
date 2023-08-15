import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valida-num',
  templateUrl: './valida-num.component.html',
  styleUrls: ['./valida-num.component.css']
})
export class ValidaNumComponent implements OnInit {


  inputText: string="";
  message: string="";
  numeroEntero: number=0;
  primerosCuatroDigitos: string="";


  extractAndCheck() {
    console.log("entro")



    const primeroDosNumeros = this.inputText.substr(0, 2);
    const primeroCuatroNumeros =  this.inputText.substr(0, 4);
    
 
    const primerosCuatroCaracteres = this.primerosCuatroDigitos.substring(0, 4);

   // Convertir a número entero
   this.numeroEntero = parseInt(primerosCuatroCaracteres, 10);

   console.log("variable 4 caracteres " +primerosCuatroCaracteres)
      console.log("antes del if " +this.numeroEntero)




    if (this.numeroEntero >= 3230 && this.numeroEntero<=3299) {
      this.message = 'TIGO';
    } else if(+primeroDosNumeros==41 || +primeroDosNumeros==42 ||+primeroDosNumeros==43 ||+primeroCuatroNumeros==3229){
      
      this.message = 'CLARO';
    }else{
      this.message = 'no encontramos tu numero es nuestra Base de Datos';
    }
  }

//hola este comentarioe s para validar que aqui
//estube
//:YO


  
  constructor() { }

  ngOnInit(): void {
  }

}
