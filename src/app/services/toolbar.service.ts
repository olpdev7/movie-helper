import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ToolbarService {
  toolbarState$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  toolbarPartialValue$: BehaviorSubject<any> = new BehaviorSubject<any>({})
}
