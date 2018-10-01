import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSuchPageViewComponent } from './no-such-page-view.component';

describe('NoSuchPageViewComponent', () => {
  let component: NoSuchPageViewComponent;
  let fixture: ComponentFixture<NoSuchPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSuchPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSuchPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
