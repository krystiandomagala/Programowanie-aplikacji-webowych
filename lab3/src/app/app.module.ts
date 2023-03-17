import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
