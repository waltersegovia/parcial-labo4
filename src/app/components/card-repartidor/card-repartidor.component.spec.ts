import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRepartidorComponent } from './card-repartidor.component';

describe('CardRepartidorComponent', () => {
  let component: CardRepartidorComponent;
  let fixture: ComponentFixture<CardRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRepartidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
