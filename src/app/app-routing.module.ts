import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCardsComponent } from './list-cards/list-cards.component';


const routes: Routes = [
  {
    path: '',
    component: ListCardsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
