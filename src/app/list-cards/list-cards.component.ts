import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  books = [
    {
      id: 1,
      price: 35.00,
      title: 'O Senhor dos Anéis: A Sociedade do Anel',
      description: '',
      author: 'J.R.R. Tolkien',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81SWBRKfExL.jpg'
    },
    {
      id: 2,
      price: 36.00,
      title: 'O Senhor dos Anéis: As duas torres',
      description: '',
      author: 'J.R.R. Tolkien',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81lQ5N0QwJL.jpg'
    },
    {
      id: 3,
      price: 36.00,
      title: 'O Senhor dos Anéis: O retorno do rei',
      description: '',
      author: 'J.R.R. Tolkien',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71%2B4uDgt8JL.jpg'
    },
    {
      id: 4,
      price: 36.00,
      title: 'O Senhor dos Anéis: O retorno do rei',
      description: '',
      author: 'J.R.R. Tolkien',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71%2B4uDgt8JL.jpg'
    },
  ];
  constructor(private snackBar: MatSnackBar) { }

  reciverBookToAdd(book) {
    let cart: any = JSON.parse(sessionStorage.getItem('cart'));
    if (!cart) {
      cart = [];
    }
    sessionStorage.setItem('cart', JSON.stringify([...cart, book]));
    this.snackBar.open('Livro adicionado com sucesso.', 'Ok', {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

}
