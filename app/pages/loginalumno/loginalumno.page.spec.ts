import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginalumnoPage } from './loginalumno.page';

describe('LoginalumnoPage', () => {
  let component: LoginalumnoPage;
  let fixture: ComponentFixture<LoginalumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
