import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService){}

  //Se especifica el tipo de dato que se quiere enviar <Personaje>, es un generico
 /*  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  agregar( ){

    if(this.nuevo.nombre.trim().length === 0){ return; }
    
    this.dbzService.agregarPersonaje(this.nuevo);
    //console.log( this.nuevo );
  /*   this.onNuevoPersonaje.emit(this.nuevo); */ //Se emite el evento
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
