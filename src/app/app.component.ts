import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';

  manejarVoto(voto:number):void{
    alert(voto);
  }

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
