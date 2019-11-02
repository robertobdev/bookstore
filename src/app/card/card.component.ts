import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() book;

  constructor() { }

  ngOnInit() {
  }

  addingToCart() {
    let cart: any = JSON.parse(sessionStorage.getItem('cart'));
    if (!cart) {
      cart = [];
    }
    sessionStorage.setItem('cart', JSON.stringify([...cart, this.book]));
  }
}
