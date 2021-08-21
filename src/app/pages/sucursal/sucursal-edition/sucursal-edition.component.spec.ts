import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalEditionComponent } from './sucursal-edition.component';

describe('SucursalEditionComponent', () => {
  let component: SucursalEditionComponent;
  let fixture: ComponentFixture<SucursalEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
