import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from './acasa/acasa.component';
import { ArticoleComponent } from './articole/articole.component';
import { AutoriComponent } from './autori/autori.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path: '', redirectTo: 'acasa', pathMatch: 'full'},
  {path: 'acasa', component: AcasaComponent},
  {path: 'articole', component: ArticoleComponent},
  {path: 'autori', component: AutoriComponent},
  {path: 'profil', component: ProfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
