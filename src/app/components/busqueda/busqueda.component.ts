import { Component } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

/**
 * i = interfaz
 * f = float
 * c = class
 * n = number
 * b = boolean
 * fn = function
 */
export class BusquedaComponent {
  cPeliculaSeleccionado! : Pelicula;

  listado = [
    {
      id : 0,
      nombre : "Los vengadores",
      tipo: [
        "terror",
        "Comedia",
        "Otros"
      ],
      fechaEstreno: new Date(),
      cantidadPublico: 20,
      fotoPelicula: "assets/img/los-vengadores.jpg"
    },
    {
      id : 0,
      nombre : "Capitan America",
      tipo: [
        "terror",
        "Comedia",
        "Otros"
      ],
      fechaEstreno: new Date(),
      cantidadPublico: 20,
      fotoPelicula: "assets/img/capitan-america.jpg"
    },
    {
      id : 0,
      nombre : "Supervivientes",
      tipo: [
        "terror",
        "Comedia",
        "Otros"
      ],
      fechaEstreno: new Date(),
      cantidadPublico: 20,
      fotoPelicula: "./assets/img/superviviente.jpg"
    },
    {
      id : 0,
      nombre : "Los minios",
      tipo: [
        "Comedia"
      ],
      fechaEstreno: new Date(),
      cantidadPublico: 20,
      fotoPelicula: "../assets/img/minions.jpg"
    }
  ];


  fnPeliculaSeleccionado(pelicula : Pelicula){
    this.cPeliculaSeleccionado = pelicula;
    console.log("Pelicula Output: " + pelicula.nombre)
  }
}
