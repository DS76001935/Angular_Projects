import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutApiComponent } from './logout-api.component';

describe('LogoutApiComponent', () => {
  let component: LogoutApiComponent;
  let fixture: ComponentFixture<LogoutApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
