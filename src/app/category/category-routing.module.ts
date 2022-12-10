import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionRpgComponent } from './action-rpg/action-rpg.component';
import { ActionComponent } from './action/action.component';
import { BattleRoyaleComponent } from './battle-royale/battle-royale.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FlightComponent } from './flight/flight.component';
import { OpenWorldComponent } from './open-world/open-world.component';
import { RacingComponent } from './racing/racing.component';
import { ShooterComponent } from './shooter/shooter.component';
import { SocialComponent } from './social/social.component';
import { SportsComponent } from './sports/sports.component';
import { ZombieComponent } from './zombie/zombie.component';

const routes: Routes = [
  {path:'racing',component:RacingComponent },
  {path:'sports',component:SportsComponent },
  {path:'social',component:SocialComponent },
  {path:'shooter',component:ShooterComponent },
  {path:'open-world',component:OpenWorldComponent },
  {path:'zombie',component:ZombieComponent },
  {path:'fantasy',component:FantasyComponent },
  {path:'action-rpg',component:ActionRpgComponent},
  {path:'action',component:ActionComponent },
  {path:'flight',component:FlightComponent },
  {path:'battle-royale',component:BattleRoyaleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CategoryRoutingModule { }
