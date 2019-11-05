import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() book;
  @Input() isCart = false;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
  @Output() removeBook: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addingToCart() {
    this.addToCart.emit(this.book);
  }

  removingBook() {
    this.removeBook.emit(this.book);
  }
}
