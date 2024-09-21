import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  @Input()
peliculas;

remover(indicePelicula:number): void{
  this.peliculas.splice(indicePelicula, 1);
}

}
