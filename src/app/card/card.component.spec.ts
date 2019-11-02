import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';
import { CustomMaterialModule } from '../shared/custom-material.module';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [CustomMaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.book = {
      id: 1,
      price: 35.00,
      title: 'O Senhor dos Anéis: A Sociedade do Anel',
      description: '',
      author: 'J.R.R. Tolkien',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81SWBRKfExL.jpg'
    };
    fixture.detectChanges();
  });

  it('should show image, title, price ', () => {
    const arrage = {
      expect: {
        id: 1,
        price: '35',
        title: 'O Senhor dos Anéis: A Sociedade do Anel',
        description: '',
        author: 'J.R.R. Tolkien',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81SWBRKfExL.jpg'
      }
    };

    const title = fixture.debugElement.query(By.css('h4')).nativeElement;
    const price = fixture.debugElement.query(By.css('h5')).nativeElement;
    const image = fixture.debugElement.query(By.css('img')).nativeElement;
    fixture.detectChanges();

    expect(title.innerText).toEqual(arrage.expect.title);
    expect(price.innerText).toEqual(arrage.expect.price);
    expect(image.src).toContain(arrage.expect.image);
  });

  it('should adding book to storageSession', () => {
    sessionStorage.clear();
    component.addingToCart();
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    fixture.detectChanges();
    expect(cart.length).toEqual(1);
  });
});
