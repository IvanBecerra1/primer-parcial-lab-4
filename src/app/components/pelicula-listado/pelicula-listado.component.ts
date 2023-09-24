import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent {
  @Input() listado = [
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
      fotoPelicula: "img.png"
    }
  ];
}
