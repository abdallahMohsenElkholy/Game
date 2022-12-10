import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { BestComponent } from './best/best.component';
import { ErrPageComponent } from './err-page/err-page.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { HomeComponent } from './home/home.component';
import { ProtectGuard } from './protect.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path:'', redirectTo:'home' ,pathMatch:'full'},
  {path:'home',canActivate:[ProtectGuard],component:HomeComponent },
  {path:'favourite',canActivate:[ProtectGuard],component:BestComponent },
  {path:'details/:id',canActivate:[ProtectGuard],component:GameDetailsComponent },
  {path:'signUp',component:SignUpComponent },
  {path:'categories' ,canActivate:[ProtectGuard], loadChildren:()=>import('./category/category.module').then((e)=>e.CategoryModule)},
  {path:'sort-by',canActivate:[ProtectGuard] , loadChildren:()=>import('./sort/sort.module').then((e)=>e.SortModule)},
  {path:'platforms',canActivate:[ProtectGuard] , loadChildren:()=>import('./platform/platform.module').then((e)=>e.PlatformModule)},
  {path:'signIn',component:SignInComponent },
  {path:'all',canActivate:[ProtectGuard],component:AllComponent },
  {path:'**' , component:ErrPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
