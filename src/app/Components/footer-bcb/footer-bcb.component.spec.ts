import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBCBComponent } from './footer-bcb.component';

describe('FooterBCBComponent', () => {
  let component: FooterBCBComponent;
  let fixture: ComponentFixture<FooterBCBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterBCBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
