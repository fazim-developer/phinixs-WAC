import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalculatorComponent } from './components/applications/calculator/calculator.component';
import { PasswordGeneratorComponent } from './components/applications/password-generator/password-generator.component';
import { TheCubeComponent } from './components/applications/the-cube/the-cube.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    ArchiveComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    CalculatorComponent,
    PasswordGeneratorComponent,
    TheCubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
