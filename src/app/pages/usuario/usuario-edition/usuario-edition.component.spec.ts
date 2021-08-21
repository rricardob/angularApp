import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditionComponent } from './usuario-edition.component';

describe('UsuarioEditionComponent', () => {
  let component: UsuarioEditionComponent;
  let fixture: ComponentFixture<UsuarioEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
