import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    
    template:`
    
<h1>{{titulo}}</h1>
<h3>La vase es de <strong>5</strong></h3>

<button (click)="acumular(numBase)">+{{numBase}}</button>

<span>{{numero}}</span>

<button (click)="acumular(-numBase)">-{{numBase}}</button>
   
`
    
})

export class ContadorComponent{
 /*es publico sin poner nada y no hace falta que pongas el tipo peor asi se lee mejor */
 public titulo: string = 'Contador App';
 numero: number =10;
 numBase:number =5;

 acumular(valor:number){
   this.numero += valor;

 }
}