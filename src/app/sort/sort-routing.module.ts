import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { PopularityComponent } from './popularity/popularity.component';
import { ReleaseDateComponent } from './release-date/release-date.component';
import { RelevanceComponent } from './relevance/relevance.component';

const routes: Routes = [
  {path:'release-date',component:ReleaseDateComponent },
  {path:'relevance',component:RelevanceComponent },
  {path:'popularity',component:PopularityComponent },
  {path:'alphabetical',component:AlphabeticalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortRoutingModule { }
