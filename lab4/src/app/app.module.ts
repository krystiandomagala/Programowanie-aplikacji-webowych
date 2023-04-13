import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssInputComponent } from './css-input/css-input.component';
import { ContainerComponent } from './container/container.component';
import { CodeOutputComponent } from './code-output/code-output.component';
@NgModule({
  declarations: [
    AppComponent,
    CssInputComponent,
    ContainerComponent,
    CodeOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
