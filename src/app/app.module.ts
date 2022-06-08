import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdditemComponent } from './additem/additem.component';
import { DisplayListComponent } from './display/display-list/display-list.component';
import { DisplayCardComponent } from './display/display-card/display-card.component';
import { ErrorComponent } from './error/error.component';
import { ErrorMessageComponent } from './error/error-message/error-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdditemComponent,
    DisplayListComponent,
    DisplayCardComponent,
    ErrorComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
