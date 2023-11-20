import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EleccionloginPage } from './eleccionlogin.page';

describe('EleccionloginPage', () => {
  let component: EleccionloginPage;
  let fixture: ComponentFixture<EleccionloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EleccionloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
