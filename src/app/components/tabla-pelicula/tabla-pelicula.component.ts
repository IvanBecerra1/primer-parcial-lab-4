import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {
  @Output() peliculaSeleccionado  = new EventEmitter<Pelicula>();
  @Input() listado = [
    {id : 0, nombre : "", tipo: [""],fechaEstreno: new Date(),cantidadPublico: 20,fotoPelicula: ""}
  ];

  filaSeleccionada: number = -1;

  marcarFila(index: number) {
    this.filaSeleccionada = index;

    console.log("CLICK EN MARCAR FILA")
  }

  desmarcarFila(index: number) {
    this.filaSeleccionada = -1;
    
    console.log("CLICK DESMARCAR FILA")
  }

  seleccionarFila(index: number) {
    this.filaSeleccionada = index;
  }
  
  obtenerPelicula(pp : any) {
    pp as Pelicula;

    this.peliculaSeleccionado.next(pp);// envio el dato
    console.log("pelicula: " + pp.nombre);
  }
}
