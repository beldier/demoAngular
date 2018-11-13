import { Component, OnInit } from '@angular/core';
import { Turista } from './turista';
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
  constructor() { }

  ngOnInit() {
  }

}
