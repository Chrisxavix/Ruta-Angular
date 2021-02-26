import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { InfoComponent } from './componentes/info/info.component';
import { NoPageComponent } from './componentes/no-page/no-page.component';

const routes: Routes = [
  { path: 'informacion', component: InfoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NoPageComponent },
  /* o redirigir */
  /* { path: '**', redirectTo: "informacion"}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
