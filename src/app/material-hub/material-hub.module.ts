import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatPaginatorModule,
  MatCardModule,
  MatChipsModule,
  MatProgressBarModule,
} from '@angular/material';

const modules = [
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatProgressBarModule,
];

@NgModule({
  // imports: modules,
  exports: modules
})
export class MaterialHubModule { }
