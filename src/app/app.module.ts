import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './shared/custom-material.module';
import { CardComponent } from './card/card.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PhoneMaskDirective } from './shared/directives/phone-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ListCardsComponent,
    CartComponent,
    UserModalComponent, PhoneMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [
    UserModalComponent
  ]
})
export class AppModule { }
