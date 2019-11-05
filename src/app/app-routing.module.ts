import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path: '',
    component: ListCardsComponent
  },
  {
    path: 'carrinho',
    component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
