import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piada',
  templateUrl: './piada.component.html',
  styleUrls: ['./piada.component.css']
})
export class PiadaComponent implements OnInit {
  
  blocoPiada: string[] = ["Primeira piada", "Segunda piada", "Terceira piada", "Quarta piada"];
  
  mostrarPiada: boolean = true;  
  
  constructor() { }

  ngOnInit() {
  }
 public esconderPiada() {
   this.mostrarPiada = false;
 }
  public voltarPiada () {
    this.mostrarPiada = true;

 }

}