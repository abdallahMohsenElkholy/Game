import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrPageComponent } from './err-page/err-page.component';
import { NavigationComponent } from './navigation/navigation.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { KeyValuePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GameDetailsComponent } from './game-details/game-details.component';
import { BestComponent } from './best/best.component';









@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ErrPageComponent,
    NavigationComponent,
    GameDetailsComponent,
    BestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    KeyValuePipe,
    RouterModule,
    CarouselModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
