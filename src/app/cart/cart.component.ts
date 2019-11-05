import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [];
  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getCountBooks();
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
  }

  reciverBookToRemove(book) {
    this.cart = this.cart.filter((bookInCart) => book.id !== bookInCart.id);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.bookService.getCountBooks();
  }

  booking() {
    
  }
}
