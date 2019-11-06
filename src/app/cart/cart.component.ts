import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [];
  constructor(private bookService: BooksService, private modal: MatDialog) { }

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
    let dialog = this.modal.open(UserModalComponent, {

    });
  }
}
