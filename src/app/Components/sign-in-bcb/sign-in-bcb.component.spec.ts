import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInBCBComponent } from './sign-in-bcb.component';

describe('SignInBCBComponent', () => {
  let component: SignInBCBComponent;
  let fixture: ComponentFixture<SignInBCBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInBCBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInBCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
