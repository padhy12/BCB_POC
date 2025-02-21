import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyBCBComponent } from './home-body-bcb.component';

describe('HomeBodyBCBComponent', () => {
  let component: HomeBodyBCBComponent;
  let fixture: ComponentFixture<HomeBodyBCBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBodyBCBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBodyBCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
