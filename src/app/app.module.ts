import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//Para comenzar a trabajar con Formularios Importamos el Angular Forms
//y seleccionamos el Reactive para trabajar con Reactive
import { ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './material/material.module';

import { MenuComponent } from './menu/menu.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndeceCinesComponent } from './cines/indece-cines/indece-cines.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ListadoGenericoComponent,
    RatingComponent,
    MenuComponent,
    ListadoPeliculasComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGenerosComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndeceCinesComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCineComponent,
    EditarPeliculaComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
