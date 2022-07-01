import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskPageComponent } from './front-desk-page.component';

describe('FrontDeskPageComponent', () => {
  let component: FrontDeskPageComponent;
  let fixture: ComponentFixture<FrontDeskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontDeskPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontDeskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
