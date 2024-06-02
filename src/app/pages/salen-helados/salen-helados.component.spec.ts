import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalenHeladosComponent } from './salen-helados.component';

describe('SalenHeladosComponent', () => {
  let component: SalenHeladosComponent;
  let fixture: ComponentFixture<SalenHeladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalenHeladosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalenHeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
