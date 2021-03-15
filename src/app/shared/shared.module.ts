
import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoagefoundComponent } from './noagefound/noagefound.component';



@NgModule({
  declarations: [
  BreadcrumbsComponent,
  HeaderComponent,
  SidebarComponent,
  NoagefoundComponent
  ],
  exports:[
    BreadcrumbsComponent,
  HeaderComponent,
  SidebarComponent,
  NoagefoundComponent
  ],
  
})
export class SharedModule { }