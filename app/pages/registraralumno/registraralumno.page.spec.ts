import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistraralumnoPage } from './registraralumno.page';

describe('RegistraralumnoPage', () => {
  let component: RegistraralumnoPage;
  let fixture: ComponentFixture<RegistraralumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistraralumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
