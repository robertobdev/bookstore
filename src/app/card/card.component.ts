import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() book;
  @Output() addToCart: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  addingToCart() {
    this.addToCart.emit(this.book);
  }
}
