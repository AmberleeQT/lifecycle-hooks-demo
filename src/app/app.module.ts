import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdditemComponent } from './additem/additem.component';
import { DisplayItemComponent } from './display/display-item/display-item.component';
import { DisplayCardComponent } from './display/display-card/display-card.component';
import { ErrorComponent } from './error/error.component';
import { ErrorMessageComponent } from './error/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdditemComponent,
    DisplayItemComponent,
    DisplayCardComponent,
    ErrorComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
