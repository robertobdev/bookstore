import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() book;
  @Input() isCart;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
  @Output() removeBook: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.isCart = false;
    this.book = {
      id: 1,
      price: 35.00,
      title: 'O Senhor dos Anéis: A Sociedade do Anel',
      description: '',
      author: 'J.R.R. Tolkien',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81SWBRKfExL.jpg'
    };
  }

  addingToCart() {
    this.addToCart.emit(this.book);
  }

  removingBook() {
    this.removeBook.emit(this.book);
  }
}
