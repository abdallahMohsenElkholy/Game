import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortRoutingModule } from './sort-routing.module';
import { ReleaseDateComponent } from './release-date/release-date.component';
import { PopularityComponent } from './popularity/popularity.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { RelevanceComponent } from './relevance/relevance.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ReleaseDateComponent,
    PopularityComponent,
    AlphabeticalComponent,
    RelevanceComponent,

  ],
  imports: [
    CommonModule,
    SortRoutingModule,
    PipesModule
  ]
})
export class SortModule { }
