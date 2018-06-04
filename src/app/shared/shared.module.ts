import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialHubModule } from '../material-hub/material-hub.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialHubModule
  ],
  declarations: [],
  exports: [
    MaterialHubModule
  ]
})
export class SharedModule { }
