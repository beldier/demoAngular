import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TuristaComponent } from './turista/turista.component';

import { FormsModule } from '@angular/forms';
import { TuristaDetalleComponent } from './turista-detalle/turista-detalle.component';
@NgModule({
   declarations: [
      AppComponent,
      TuristaComponent,
      TuristaDetalleComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
