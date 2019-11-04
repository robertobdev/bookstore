import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardsComponent } from './list-cards.component';
import { By } from '@angular/platform-browser';
import { CustomMaterialModule } from '../shared/custom-material.module';
import { CardComponent } from '../card/card.component';

describe('ListCardsComponent', () => {
  let component: ListCardsComponent;
  let fixture: ComponentFixture<ListCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListCardsComponent, CardComponent],
      imports: [
        CustomMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardsComponent);
    component = fixture.componentInstance;
    component.books = [
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
        price: 33.00,
        title: 'As Crônicas de Nárnia',
        description: '',
        author: 'C. S. Lewis',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51lwu3FTjGL.jpg'
      },
    ];
    fixture.detectChanges();
  });

  it('should create 4 book component', () => {
    const bookComponent = fixture.debugElement.queryAll(By.css('app-card'));
    expect(bookComponent.length).toEqual(4);
  });
});
