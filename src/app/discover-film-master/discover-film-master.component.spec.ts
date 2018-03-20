import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverFilmMasterComponent } from './discover-film-master.component';

describe('DiscoverFilmMasterComponent', () => {
  let component: DiscoverFilmMasterComponent;
  let fixture: ComponentFixture<DiscoverFilmMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverFilmMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverFilmMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
