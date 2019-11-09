import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksCount = new BehaviorSubject<any>(0);

  constructor(private http: HttpClient) { }

  getBooks(): Promise<any> {
    return this.http.get('urlDoService').toPromise();
  }

  getCountBooks(): void {
    const count: any = JSON.parse(sessionStorage.getItem('cart')).length;
    this.booksCount.next(count);
  }

  salvarUsuario(dadosDoUsuario) {
    // tslint:disable-next-line: quotemark
    dadosDoUsuario = { "name": "cso ntm", "salary": "123", "age": "23" };
   // tslint:disable-next-line: align
   return this.http.post('http://dummy.restapiexample.com/api/v1/create', dadosDoUsuario).toPromise();
  }
}
