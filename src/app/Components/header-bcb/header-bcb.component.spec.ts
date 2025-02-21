import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBCBComponent } from './header-bcb.component';

describe('HeaderBCBComponent', () => {
  let component: HeaderBCBComponent;
  let fixture: ComponentFixture<HeaderBCBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBCBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
