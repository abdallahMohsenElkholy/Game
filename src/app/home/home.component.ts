import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../games-api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    margin:10,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 0,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navText: [ "", ],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  constructor(private _GamesApiService:GamesApiService,private _FavouriteService:FavouriteService) { }
  gamesArr !:any[]
  ngOnInit(): void {
    this._GamesApiService.getAllGames('sort-by','popularity').subscribe({
      next:res=>{this.gamesArr=res}
    });
    this.favList=Array.from(this._FavouriteService.userFav())
    
  }
  favList!:string[]

}
