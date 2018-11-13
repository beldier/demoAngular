import { Component, OnInit } from '@angular/core';
import { Turista } from './turista';
import { TURISTAS } from './mock-turistas';
@Component({
  selector: 'app-turista',
  templateUrl: './turista.component.html',
  styleUrls: ['./turista.component.css']
})
export class TuristaComponent implements OnInit {
  turista: Turista = {
      id: 1,
      nombre: 'Jack'
  };
  turistas = TURISTAS;
  turistaSeleccionado: Turista;
  constructor() { }

  ngOnInit() {
  }
  onSelect(turista2: Turista): void {
    this.turistaSeleccionado = turista2;
    // alert(this.turistaSeleccionado.nombre);
  }

}
