import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  countBooks = 0;

  constructor(private bookService: BooksService) {
    this.bookService.booksCount.subscribe((count) => {
      this.countBooks = count;
    });
  }

  ngOnInit() {
  }

  goTo() {

  }

}
