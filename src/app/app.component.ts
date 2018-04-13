import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showProgressBar: boolean;
  @select(['sidebar', 'opened'])
  sidebarOpened$: Observable<boolean>;
}
