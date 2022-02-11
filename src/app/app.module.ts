import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationSearchComponent } from './components/location-search/location-search.component';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { DataDisplayItemComponent } from './components/data-display-item/data-display-item.component';
import { AboutComponent } from './components/about/about.component';
import { PollutionQueryComponent } from './components/pollution-query/pollution-query.component';




@NgModule({
  declarations: [
    AppComponent,
    LocationSearchComponent,
    DataDisplayComponent,
    ErrorDisplayComponent,
    DataDisplayItemComponent,
    AboutComponent,
    PollutionQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
