import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeliseContactsComponent } from './selise-contacts.component';

describe('SeliseContactsComponent', () => {
  let component: SeliseContactsComponent;
  let fixture: ComponentFixture<SeliseContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeliseContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeliseContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
