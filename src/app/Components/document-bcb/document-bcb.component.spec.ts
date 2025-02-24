import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentBCBComponent } from './document-bcb.component';

describe('DocumentBCBComponent', () => {
  let component: DocumentBCBComponent;
  let fixture: ComponentFixture<DocumentBCBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentBCBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentBCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
