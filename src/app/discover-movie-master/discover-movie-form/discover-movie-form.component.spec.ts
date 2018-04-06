import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMovieFormComponent } from './discover-movie-form.component';

describe('DiscoverMovieFormComponent', () => {
  let component: DiscoverMovieFormComponent;
  let fixture: ComponentFixture<DiscoverMovieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverMovieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverMovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
