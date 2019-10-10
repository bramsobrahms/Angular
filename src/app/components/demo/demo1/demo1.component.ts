import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  
  private _maVariable : string;
  public get maVariable() : string {
    return this._maVariable;
  }
  public set maVariable(v : string) {
    this._maVariable = v;
  }
  

  constructor() { }

  ngOnInit() {
    this.maVariable ="Hey you !";
    setTimeout( () =>{
      this.maVariable=" Yeety ";
    }, 5000)
  }

}
