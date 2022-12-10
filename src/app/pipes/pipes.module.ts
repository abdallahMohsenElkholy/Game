import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { CutNumPipe } from './cut-num.pipe';




@NgModule({
  declarations: [
    FilterPipe,
    CutNumPipe
  ],
  exports:[FilterPipe,CutNumPipe],
  imports: [
    CommonModule,
  ]
})
export class PipesModule { }
