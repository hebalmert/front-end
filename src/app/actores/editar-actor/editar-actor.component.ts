import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent implements OnInit{
/**
ActivatedRoute: activatedRoute  y el params.suscribe es para poder capturar el 
parametro que bien por el Query
 */
constructor(private activatedRoute: ActivatedRoute) {
}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id);
    })
  }
}
