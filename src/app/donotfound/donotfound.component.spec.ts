import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonotfoundComponent } from './donotfound.component';

describe('DonotfoundComponent', () => {
  let component: DonotfoundComponent;
  let fixture: ComponentFixture<DonotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
