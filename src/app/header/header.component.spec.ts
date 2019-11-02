import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { CustomMaterialModule } from '../custom-material.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [CustomMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show a title and button', () => {
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(title.innerText).toEqual('BookStore');
    expect(button).toBeTruthy();
  });

  it('should click a button and dispatch a function', () => {
    const spyGoTo = spyOn(component, 'goTo').and.callThrough();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(spyGoTo).toHaveBeenCalled();
  });

});
