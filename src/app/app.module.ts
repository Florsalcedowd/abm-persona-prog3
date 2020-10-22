import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './components/persona/tabla/tabla.component';
import { FormComponent } from './components/persona/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablaRactivaComponent } from './components/persona-reactiva/tabla-ractiva/tabla-ractiva.component';
import { FormReactivoComponent } from './components/persona-reactiva/form-reactivo/form-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    FormComponent,
    NavbarComponent,
    TablaRactivaComponent,
    FormReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
