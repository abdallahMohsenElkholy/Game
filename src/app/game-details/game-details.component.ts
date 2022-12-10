
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesApiService } from '../games-api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from '../auth.service';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplaySpeed:3000,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
game:any
constructor(private _ActivatedRoute:ActivatedRoute ,private _GamesApiService:GamesApiService , private _AuthService:AuthService ,private _FavouriteService:FavouriteService) { }

ngOnInit(): void {
  this.favList=Array.from(this._FavouriteService.userFav())
  console.log(this.favList);
  
  this._GamesApiService.getGameDetails(this._ActivatedRoute.snapshot.params['id']).subscribe({
    next:res=>{this.game=res;this.obj= new Map(Object.entries(this.game.minimum_system_requirements))
      if( this.favList.includes(this.game.id)){
        this.keyValue="Remove from Fav"
      }else{this.keyValue="Add to Fav"}
     
    }
  })
}

  imges!:string[]
  obj!:{}
  favList!:string[]
  keyValue:string='Add to Fav'
  checkAdd:boolean=false

  addToFav(id:string){
    if(this.keyValue=='Add to Fav'){
      this.checkAdd=true
      this.keyValue='Remove from Fav'
      this._FavouriteService.addToFav(id);
    }else{
      this.favList.splice(this.favList.indexOf(id),1)
      this.checkAdd=false
      this.keyValue='Add to Fav'
      this._FavouriteService.removeFromFav(id)
    }
  }

}
