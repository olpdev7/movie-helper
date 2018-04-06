import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

import { ToolbarData } from '../interfaces';

@Injectable()
export class ToolbarService {
  toolbarState$: BehaviorSubject<ToolbarData> = new BehaviorSubject<ToolbarData>({});
  toolbarPartialValue$: BehaviorSubject<ToolbarData> = new BehaviorSubject<ToolbarData>({});
}
