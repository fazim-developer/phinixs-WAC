import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { PasswordGeneratorComponent } from './components/applications/password-generator/password-generator.component';
import { CalculatorComponent } from './components/applications/calculator/calculator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TheCubeComponent } from './components/applications/the-cube/the-cube.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path: 'app', component: ApplicationsComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'password-generator', component: PasswordGeneratorComponent},
  {path:'calculator', component:CalculatorComponent},
  {path: 'the-cube' , component:TheCubeComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
