import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabechalhoComponent } from './cabechalho.component';

describe('CabechalhoComponent', () => {
  let component: CabechalhoComponent;
  let fixture: ComponentFixture<CabechalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabechalhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabechalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
