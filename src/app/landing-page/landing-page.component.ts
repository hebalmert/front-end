import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    this.peliculasEnCines = [
      {
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1499.98,
        poster:
          'https://dreamforger.com/cdn/shop/products/Spiderman-Minimalistic-Poster-11x17_v1a_1445x.jpg?v=1648738841',
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 1300.99,
        poster: 'https://m.media-amazon.com/images/I/81rjqvHFtkL.jpg',
      },
    ];
  }
  title = 'front-end';

  ocultar = false;

  peliculasEnCines;

  peliculasProximosEstrenos = [
    {
      titulo: 'Avengers: EndGame',
      fechaLanzamiento: new Date(),
      precio: 1499.98,
      poster:
        'https://cdn11.bigcommerce.com/s-l71eudan7b/images/stencil/1280x1280/products/1605/2774/7006web__04991.1649443290.jpg?c=2',
    },
    {
      titulo: 'Inception',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 1300.99,
      poster:
        'https://m.media-amazon.com/images/I/71uKM+LdgFL._AC_UF894,1000_QL80_.jpg',
    },
    {
      titulo: 'Rocky',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 1300.99,
      poster:
        'https://m.media-amazon.com/images/I/51KBSyprSRL._AC_UF894,1000_QL80_.jpg',
    },
  ];
}
