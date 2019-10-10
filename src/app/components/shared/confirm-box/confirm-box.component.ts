import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {

  constructor(
    private ref:NbDialogRef<ConfirmBoxComponent>
  ) { }

  ngOnInit() {
  }

  confirm(){
    this.ref.close(true);
  }
  cancel(){
    this.ref.close(false);
  }

}
