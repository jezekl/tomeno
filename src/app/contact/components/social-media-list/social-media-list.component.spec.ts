import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaListComponent } from './social-media-list.component';

describe('SocialMediaListComponent', () => {
  let component: SocialMediaListComponent;
  let fixture: ComponentFixture<SocialMediaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
