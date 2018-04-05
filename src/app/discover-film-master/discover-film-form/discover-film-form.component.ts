import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiscoverParams } from '../../interfaces/discover-params.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-discover-film-form',
  templateUrl: './discover-film-form.component.html',
  styleUrls: ['./discover-film-form.component.scss']
})
export class DiscoverFilmFormComponent implements OnInit {

  @Input()
  discoverParams: any = {primary_release_year: 2016};

  @Output()
  discoverParamsChange = new EventEmitter();

  discoverForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.discoverForm = this.formBuilder.group({
      primary_release_year: '2016'
    });

    this.discoverForm.valueChanges.subscribe((changes) => {
      this.discoverParamsChange.emit(changes);
    })
  }

}
