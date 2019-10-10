import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {

  public compteur : number = 0;
  public time: number;
  public boolean: boolean = false;
  constructor() { }

  
  ngOnInit() {
    this.compteur = 0;
    }
  
    btnStar(){
      this.boolean =true;
     this.time = <any> setInterval( () =>{
        this.compteur++;
      }, 1000)
    }
  
    btnStop(){
      this.boolean = false;
      clearInterval(this.time);     
    } 
  
    btnReset(){
      this.boolean = false;
      clearInterval(this.time);
      this.compteur=0;
    }
}
