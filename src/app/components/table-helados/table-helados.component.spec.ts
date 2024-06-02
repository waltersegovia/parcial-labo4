import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeladosComponent } from './table-helados.component';

describe('TableHeladosComponent', () => {
  let component: TableHeladosComponent;
  let fixture: ComponentFixture<TableHeladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHeladosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableHeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
