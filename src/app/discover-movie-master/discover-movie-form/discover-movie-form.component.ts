import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DiscoverParams } from '../../interfaces';

@Component({
  selector: 'app-discover-movie-form',
  templateUrl: './discover-movie-form.component.html',
  styleUrls: ['./discover-movie-form.component.scss']
})
export class DiscoverMovieFormComponent implements OnInit {
  @Input()
  discoverParams: DiscoverParams = {};
  @Output()
  discoverParamsChange: EventEmitter<DiscoverParams> = new EventEmitter();

  discoverForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.discoverForm = this.formBuilder.group({
      primary_release_year: ''
    });

    this.discoverForm.valueChanges.subscribe((changes: DiscoverParams) => {
      this.discoverParamsChange.emit(changes);
    });
  }

}
