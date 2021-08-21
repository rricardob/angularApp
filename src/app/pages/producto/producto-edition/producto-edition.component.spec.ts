import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEditionComponent } from './producto-edition.component';

describe('ProductoEditionComponent', () => {
  let component: ProductoEditionComponent;
  let fixture: ComponentFixture<ProductoEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
