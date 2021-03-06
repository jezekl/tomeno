import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedServicesComponent } from './offered-services.component';

describe('OfferedServicesComponent', () => {
  let component: OfferedServicesComponent;
  let fixture: ComponentFixture<OfferedServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferedServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
