import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPartsListComponent } from './body-parts-list.component';

describe('BodyPartsListComponent', () => {
  let component: BodyPartsListComponent;
  let fixture: ComponentFixture<BodyPartsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPartsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPartsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
