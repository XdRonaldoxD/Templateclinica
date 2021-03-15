import { Routes, RouterModule } from "@angular/router";
import { DasboardComponent } from "./pages/dasboard/dasboard.component";
import { LoginComponent } from "./login/login.component";
import { Graficas1Component } from "./pages/graficas1/graficas1.component";
import { NoagefoundComponent } from "./shared/noagefound/noagefound.component";
import { PagesComponent } from "./pages/pages.component";
import { RegisterComponent } from './login/register.component';
import { ProgressComponent } from './pages/progress/progress.component';

const appRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
        //Hijas del pageConponente
      { path: "dasboard", component: DasboardComponent },
      { path: "pregrees", component: ProgressComponent },
      { path: "graficas1", component: Graficas1Component },
      { path: "", redirectTo: "/dasboard", pathMatch: "full" }
    ]
  },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },

  //si esque no existe el componente lo manda en un 404
  { path: "**", component: NoagefoundComponent }
];

//Define todas las rutas principales
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
