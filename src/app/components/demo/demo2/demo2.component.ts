import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  public compteur: number;

  public compteur2: number;

  constructor() { }

  ngOnInit() {
    this.compteur = 0;
    this.compteur2 = 0;
  }

  onMouseOver(){
    console.log("Salut Feet")
    this.compteur++;
  }

  increase(){
    if(this.compteur2<9){
      this.compteur2++;
    }
  }

  decrease(){
    if(this.compteur2>0){
      this.compteur2--;
    }
  }

}
