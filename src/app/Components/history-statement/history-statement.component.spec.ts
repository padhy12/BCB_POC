import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryStatementComponent } from './history-statement.component';

describe('HistoryStatementComponent', () => {
  let component: HistoryStatementComponent;
  let fixture: ComponentFixture<HistoryStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryStatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
