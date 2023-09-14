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




  validaEmpresaNumero() {
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
      this.cuatroDigitosConver ==  5819 ||
      (this.cuatroDigitosConver >= 3200 && this.cuatroDigitosConver <= 3228) ||
      (this.cuatroDigitosConver >= 3230 && this.cuatroDigitosConver <= 3299) ||
      (this.cuatroDigitosConver >= 3300 && this.cuatroDigitosConver <= 3359) ||
      (this.cuatroDigitosConver >= 4476 && this.cuatroDigitosConver <= 4699) ||
      (this.cuatroDigitosConver >= 4773 && this.cuatroDigitosConver <= 4799) ||
      (this.cuatroDigitosConver >= 4800 && this.cuatroDigitosConver <= 4819) ||
      (this.cuatroDigitosConver >= 4820 && this.cuatroDigitosConver <= 4899) ||
      (this.cuatroDigitosConver >= 4900 && this.cuatroDigitosConver <= 4999) ||
      (this.cuatroDigitosConver >= 5000 && this.cuatroDigitosConver <= 5009) ||
      (this.cuatroDigitosConver >= 5030 && this.cuatroDigitosConver <= 5029) ||
      (this.cuatroDigitosConver >= 5150 && this.cuatroDigitosConver <= 5199) ||
      (this.cuatroDigitosConver >= 5200 && this.cuatroDigitosConver <= 5209) ||
      (this.cuatroDigitosConver >= 5300 && this.cuatroDigitosConver <= 5309) ||
      (this.cuatroDigitosConver >= 5314 && this.cuatroDigitosConver <= 5389) ||
      (this.cuatroDigitosConver >= 5520 && this.cuatroDigitosConver <= 5529) ||
      (this.cuatroDigitosConver >= 5550 && this.cuatroDigitosConver <= 5553) ||
      (this.cuatroDigitosConver >= 5580 && this.cuatroDigitosConver <= 5581) ||
      (this.cuatroDigitosConver >= 5700 && this.cuatroDigitosConver <= 5709) ||
      (this.cuatroDigitosConver >= 5719 && this.cuatroDigitosConver <= 5789) ||
      (this.cuatroDigitosConver >= 5800 && this.cuatroDigitosConver <= 5809) ||
      (this.cuatroDigitosConver >= 5880 && this.cuatroDigitosConver <= 5899) ||
      (this.cuatroDigitosConver >= 5900 && this.cuatroDigitosConver <= 5909) ||
      (this.cuatroDigitosConver >= 5918 && this.cuatroDigitosConver <= 5919) ||
      (this.cuatroDigitosConver >= 5990 && this.cuatroDigitosConver <= 5999)
     
    ) {
      this.message = 'TIGO';
      //this.limpiarCampo();
    } else if (
      this.cuatroDigitosConver == 3229 ||
      +primeroDosNumeros == 41 ||
      +primeroDosNumeros == 42 ||
      +primeroDosNumeros == 43 ||
      (this.cuatroDigitosConver >= 3400 && this.cuatroDigitosConver <= 3499) ||
      (this.cuatroDigitosConver >= 3500 && this.cuatroDigitosConver <= 3564) ||
      (this.cuatroDigitosConver >= 4400 && this.cuatroDigitosConver <= 4475) ||
      (this.cuatroDigitosConver >= 4700 && this.cuatroDigitosConver <= 4772) ||
      (this.cuatroDigitosConver >= 5010 && this.cuatroDigitosConver <= 5019) ||
      (this.cuatroDigitosConver >= 5070 && this.cuatroDigitosConver <= 5099) ||
      (this.cuatroDigitosConver >= 5140 && this.cuatroDigitosConver <= 5149) ||
      (this.cuatroDigitosConver >= 5210 && this.cuatroDigitosConver <= 5299) ||
      (this.cuatroDigitosConver >= 5310 && this.cuatroDigitosConver <= 5311) ||
      (this.cuatroDigitosConver >= 5312 && this.cuatroDigitosConver <= 5389) ||
      (this.cuatroDigitosConver >= 5390 && this.cuatroDigitosConver <= 5399) ||
      (this.cuatroDigitosConver >= 5400 && this.cuatroDigitosConver <= 5409) ||
      (this.cuatroDigitosConver >= 5410 && this.cuatroDigitosConver <= 5499) ||
      (this.cuatroDigitosConver >= 5500 && this.cuatroDigitosConver <= 5509) ||
      (this.cuatroDigitosConver >= 5510 && this.cuatroDigitosConver <= 5517) ||
      (this.cuatroDigitosConver >= 5518 && this.cuatroDigitosConver <= 5519) ||
      (this.cuatroDigitosConver >= 5530 && this.cuatroDigitosConver <= 5539) ||
      (this.cuatroDigitosConver >= 5540 && this.cuatroDigitosConver <= 5539) ||
      (this.cuatroDigitosConver >= 5543 && this.cuatroDigitosConver <= 5544) ||
      (this.cuatroDigitosConver >= 5545 && this.cuatroDigitosConver <= 5549) ||
      (this.cuatroDigitosConver >= 5554 && this.cuatroDigitosConver <= 5579) ||
      (this.cuatroDigitosConver >= 5582 && this.cuatroDigitosConver <= 5599) ||
      (this.cuatroDigitosConver >= 5610 && this.cuatroDigitosConver <= 5639) ||
      (this.cuatroDigitosConver >= 5640 && this.cuatroDigitosConver <= 5689) ||
      (this.cuatroDigitosConver >= 5690 && this.cuatroDigitosConver <= 5699) ||
      (this.cuatroDigitosConver >= 5710 && this.cuatroDigitosConver <= 5709) ||
      (this.cuatroDigitosConver >= 5790 && this.cuatroDigitosConver <= 5799) ||
      (this.cuatroDigitosConver >= 5810 && this.cuatroDigitosConver <= 5818) ||
      (this.cuatroDigitosConver >= 5820 && this.cuatroDigitosConver <= 5879) ||
      (this.cuatroDigitosConver >= 5910 && this.cuatroDigitosConver <= 5914) ||
      (this.cuatroDigitosConver >= 5920 && this.cuatroDigitosConver <= 5989) ||
      (this.cuatroDigitosConver >= 4700 && this.cuatroDigitosConver <= 4772) 

    ) {
      this.message = 'CLARO';
     // this.limpiarCampo();
    } else {
      this.message = 'No encontramos tu numero es nuestra Base de Datos';
    }
}
  
  
limpiarCampo() {
  this.inputText = '';
  this.message='';
}



  constructor() {}

  ngOnInit(): void {}
}
