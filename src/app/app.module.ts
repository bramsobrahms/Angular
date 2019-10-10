import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbMenuModule, NbInputModule, NbIconModule, NbSelectModule, NbSidebarModule, NbCheckboxModule, NbListModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { ExoComponent } from './components/exo/exo.component';
import { Exo1Component } from './components/exo/exo1/exo1.component';
import { Demo3Component } from './component/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { FormsModule } from '@angular/forms';
import { Exo2Component } from './components/exo/exo2/exo2.component';
import { config } from 'rxjs';
import { ConfirmBoxComponent } from './components/shared/confirm-box/confirm-box.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';

const routes : Route[]= [ 
  { path: 'home', component: HomeComponent },
  { path: 'about',component:AboutComponent },
  { path: 'demo',component:DemoComponent,children:[
    {path:'demo1', component:Demo1Component},
    {path:'demo2', component:Demo2Component},
    {path:'demo3', component:Demo3Component},
    {path:'demo4', component:Demo4Component},
    {path:'demo5', component:Demo5Component},
    {path:'demo6', component:Demo6Component},
  ]},
  { path: 'exo',component:ExoComponent,children:[
    {path:'exo1', component:Exo1Component},
    {path:'exo2', component:Exo2Component},
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    ExoComponent,
    Exo1Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Exo2Component,
    ConfirmBoxComponent,
    Demo6Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbMenuModule.forRoot(),
    NbInputModule,
    NbIconModule,
    NbSelectModule,
    NbCheckboxModule,
    NbListModule,
    NbDialogModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ConfirmBoxComponent
  ]
})
export class AppModule { }
