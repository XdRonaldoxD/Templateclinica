
import { NgModule } from '@angular/core';
import { DasboardComponent } from './dasboard/dasboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [
   DasboardComponent,
   Graficas1Component,
   ProgressComponent,

  ],
  exports:[
    DasboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  imports:[
      
  ]
})
export class PagesModule { }