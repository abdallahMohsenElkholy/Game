import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PcComponent } from './pc/pc.component';
import { BrowserComponent } from './browser/browser.component';
import { PipesModule } from '../pipes/pipes.module';





@NgModule({
  declarations: [
    PcComponent,
    BrowserComponent,
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    PipesModule
  
  ]
})
export class PlatformModule { }
