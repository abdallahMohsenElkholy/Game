import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserComponent } from './browser/browser.component';
import { PcComponent } from './pc/pc.component';

const routes: Routes = [
  {path:'pc',component:PcComponent},
  {path:'browser',component:BrowserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
