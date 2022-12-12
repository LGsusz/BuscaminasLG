import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Matriz } from './jugar/matriz';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('Juego finaliza si se activa una bomba', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance.checkCell
    expect(app).call
  });

  
});
