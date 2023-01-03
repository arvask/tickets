import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { MatDialogModule } from "@angular/material/dialog";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
       BrowserModule,
       AppRoutingModule,
       BrowserAnimationsModule,
       StoreModule.forRoot(reducers, {
         metaReducers
       }),
       EffectsModule.forRoot(),
       StoreDevtoolsModule.instrument({ maxAge: 55 }),
       MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
