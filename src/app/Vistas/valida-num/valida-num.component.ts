import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valida-num',
  templateUrl: './valida-num.component.html',
  styleUrls: ['./valida-num.component.css']
})
export class ValidaNumComponent implements OnInit {


  inputText: string="";
  message: string="";

  extractAndCheck() {
    const primeroDosNumeros = this.inputText.substr(0, 2);
    
    if (+primeroDosNumeros == 30 || +primeroDosNumeros==31 ||+primeroDosNumeros==40 ) {
      this.message = 'TIGO';
    } else {
      this.message = 'Los dos primeros números son mayores o iguales a 100.';
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
