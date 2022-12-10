import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { RacingComponent } from './racing/racing.component';
import { SportsComponent } from './sports/sports.component';
import { SocialComponent } from './social/social.component';
import { ShooterComponent } from './shooter/shooter.component';
import { OpenWorldComponent } from './open-world/open-world.component';
import { ZombieComponent } from './zombie/zombie.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { ActionRpgComponent } from './action-rpg/action-rpg.component';
import { ActionComponent } from './action/action.component';
import { BattleRoyaleComponent } from './battle-royale/battle-royale.component';
import { FlightComponent } from './flight/flight.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    RacingComponent,
    SportsComponent,
    SocialComponent,
    ShooterComponent,
    OpenWorldComponent,
    ZombieComponent,
    FantasyComponent,
    ActionRpgComponent,
    ActionComponent,
    BattleRoyaleComponent,
    FlightComponent,
  ],
  imports: [
  CommonModule,
    CategoryRoutingModule,
    PipesModule
  ]
})
export class CategoryModule { }
