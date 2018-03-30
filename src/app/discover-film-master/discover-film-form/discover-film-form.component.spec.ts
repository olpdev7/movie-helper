import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverFilmFormComponent } from './discover-film-form.component';

describe('DiscoverFilmFormComponent', () => {
  let component: DiscoverFilmFormComponent;
  let fixture: ComponentFixture<DiscoverFilmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverFilmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverFilmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
