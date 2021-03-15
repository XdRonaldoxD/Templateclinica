import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app.routes';

//MODULES
import { PagesModule } from './pages/pages.module';



import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { LoginComponent } from './login/login.component';


import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { NoagefoundComponent } from './shared/noagefound/noagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';






@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    NoagefoundComponent,
 

    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
