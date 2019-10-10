import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public items: NbMenuItem[]= [
  { title: 'Home', link:'/home', icon:'home' },
  { title: 'About', link:'/about', icon:'question-mark' },
  { title: 'Demo', icon:'tv-outline', children:[
    {title: 'Demo 1 - Binding One Way', link:'/demo/demo1'},
    {title: 'Demo 2 - Event', link:'/demo/demo2'},
    {title: 'Demo 3 - Lorem', link:'/demo/demo3'},
    {title: 'Demo 4 - item boucle for', link:'/demo/demo4'},
    {title: 'Demo 5 - writing items', link:'/demo/demo5'},
    {title: 'Demo 6 - Observables', link:'/demo/demo6'},
  ]},
  { title: 'Exo', icon:'tv-outline', children:[
    {title: 'Exo 1 - Exo interval', link:'/exo/exo1'},
    {title: 'Exo 2 - Shopping list', link:'/exo/exo2'},
  ]},
  ];

  constructor() { }

  ngOnInit() {
  }

}
