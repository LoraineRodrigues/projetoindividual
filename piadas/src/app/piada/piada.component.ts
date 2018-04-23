import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piada',
  templateUrl: './piada.component.html'
})
export class PiadaComponent implements OnInit {
  
  blocoPiada: string[] = ["Primeira piada", "Segunda piada", "Terceira piada", "Quarta piada", "Quinta piada", "Sexta piada"];
  
  mostrarPiada: boolean = true;  
  
  constructor() { }

  ngOnInit() {
  }
 public esconderPiada() {
   this.mostrarPiada = false;
 }
  public voltarPiada() {
    this.mostrarPiada = true;

 }
public mostrarAlerta1() {
alert ('Que bom!      *_____*')
}

public mostrarAlerta2() {
  alert('Ah... Que pena! ¬_¬                              Tente outra piada! *u*')
}
}