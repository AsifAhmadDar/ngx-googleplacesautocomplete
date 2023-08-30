import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GooglePlacesAutocompleteModule } from 'projects/googleplacesautocomplete/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GooglePlacesAutocompleteModule.forRoot({apiKey:'AIzaSyAffcL4_htP5zm0JYZjgvvJR6OaDicuXzI'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
