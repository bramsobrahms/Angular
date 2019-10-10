import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ConfirmBoxComponent } from '../../shared/confirm-box/confirm-box.component';


@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {  

  public item : String;
  public lists : String[];
  public toDelete :String[];
 
  constructor(
    private dialService: NbDialogService
  ) { }

  ngOnInit() {
    this.item = "Apple";
    this.lists=[];
    this.toDelete=[];

  }
  add(){
    this.lists.push(this.item);
    this.item=null;
    
  }
  removeLast(){
    var index = this.lists.indexOf(this.item);
    this.lists.splice(index,1);
  }
  remove(index:number){
    this.lists.splice(index,1);
  }
  onChange(item:String, event: any){
   if(event.target.checked){
     this.toDelete.push(item);
   }else{
     let index = this.toDelete.indexOf(item);
     this.toDelete.splice(index,1)
   }
   console.log(this.toDelete);
  }
  removeAll(){
    let ref = this.dialService.open(ConfirmBoxComponent);
    ref.onClose.subscribe(data =>{
      if(data){
        //deux possibilités soit celui là
        this.lists = this.lists.filter(
          x => !this.toDelete.includes(x)
        )
      }
  });

    /* où celui là */
    // for(let x of this.toDelete){
    //   let index = this.lists.indexOf(x);
    //   this.lists.splice(index,1)
    // }
    //this.toDelete=[];
  }
}
