import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNavTitleComponent } from './custom-nav-title.component';

describe('CustomNavTitleComponent', () => {
  let component: CustomNavTitleComponent;
  let fixture: ComponentFixture<CustomNavTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNavTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNavTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
