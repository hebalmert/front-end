import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
  {
    titulo: 'Spider-Man',
    fechaLanzamiento: new Date(),
    precio: 1499.98,
  },
  {
    titulo: 'Moana',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 1300.99,
  }
];
}, 500);

  }
  title = 'front-end';

  ocultar = false;

  peliculasEnCines;

  peliculasProximosEstrenos=[
    {
      titulo: 'Avengers: EndGame',
      fechaLanzamiento: new Date(),
      precio: 1499.98,
    },
    {
      titulo: 'Inception',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 1300.99,
    },
    {
      titulo: 'Rocky',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 1300.99,
    }
  ];

  manejarVoto(voto:number):void{
    alert(voto);
  }

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
