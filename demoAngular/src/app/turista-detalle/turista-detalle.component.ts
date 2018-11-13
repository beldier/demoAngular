import { Component, OnInit, Input } from '@angular/core';
import { Turista } from '../turista/turista';
@Component({
  selector: "app-turista-detalle",
  templateUrl: "./turista-detalle.component.html",
  styleUrls: ["./turista-detalle.component.css"]
})
export class TuristaDetalleComponent implements OnInit {
  @Input() turista: Turista;
  constructor() {}

  ngOnInit() {}
}
