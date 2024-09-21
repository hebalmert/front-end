import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent implements OnInit{
  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  guardarCambios(){
    //Codigo para Guardar los cambios
    this.router.navigate(['/generos'])
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if(campo.hasError('required')){
      return 'El Campo nombre es Requerido'
    }
    if(campo.hasError('minlength')){
      return 'El minimo Caracteres de 3'
    }    
    return '';
  }


}
