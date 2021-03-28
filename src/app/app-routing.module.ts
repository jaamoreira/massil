import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';

const routes: Routes = [
  { path: '',redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: PageHomeComponent },
  { path: 'sobre', component: PageAboutComponent },
  { path: 'contactos', component: PageContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
