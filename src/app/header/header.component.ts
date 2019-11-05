import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  countBooks = 0;

  constructor(private bookService: BooksService, private router: Router) {
    this.bookService.booksCount.subscribe((count) => {
      this.countBooks = count;
    });
  }

  ngOnInit() {
  }

  goTo() {
    this.router.navigateByUrl('/carrinho');
  }

}
