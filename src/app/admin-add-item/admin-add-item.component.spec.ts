import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddItemComponent } from './admin-add-item.component';

describe('AdminAddItemComponent', () => {
  let component: AdminAddItemComponent;
  let fixture: ComponentFixture<AdminAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
