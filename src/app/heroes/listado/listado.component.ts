import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan América'];
heroeBorrado: string = '';

borrarHeroe() {
  
  this.heroeBorrado =  this.heroes.shift() || '';

  /* const HEROE_BORRADO = this.heroes.shift();
  HEROE_BORRADO !== undefined ? 
  console.log('Se ha borrado: '+ HEROE_BORRADO) : 
  console.log('No quedan más elementos por borrar'); */
  
}

}
