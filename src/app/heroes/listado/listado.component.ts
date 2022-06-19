import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

 heroes: string[] = ['Spiderman','HULK', 'MariCarmen','Goku','Ampeter'];
 heroeBorrado:string='';

 borrarHeroe(){
  this.heroeBorrado=this.heroes.shift() || '';
  
  
 }

}
