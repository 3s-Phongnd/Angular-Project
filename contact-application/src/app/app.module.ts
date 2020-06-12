import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './container/contact-list/contact-list.component';
import { ContactImageDetailComponent } from './contact-image-detail/contact-image-detail.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SlideImagesComponent } from './slide-images/slide-images.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactImageDetailComponent,
    SlideImagesComponent,
    GoogleMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
