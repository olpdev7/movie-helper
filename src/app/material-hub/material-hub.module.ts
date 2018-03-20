import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';

const modules = [MatSidenavModule, MatToolbarModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialHubModule { }
