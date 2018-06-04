import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMovieMasterComponent } from './discover-movie-master.component';

describe('DiscoverMovieMasterComponent', () => {
  let component: DiscoverMovieMasterComponent;
  let fixture: ComponentFixture<DiscoverMovieMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverMovieMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverMovieMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
