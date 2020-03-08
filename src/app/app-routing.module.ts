import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "error", component: ErrorComponent
  },
  {
    path: "**", component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
