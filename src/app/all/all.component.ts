import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FavouriteService } from '../favourite.service';
import { GamesApiService } from '../games-api.service';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  gamesArr !:any[]
  cardNum:number = 20
  constructor(private _GamesApiService:GamesApiService ,private _AuthService:AuthService ,private _FavouriteService:FavouriteService) { }
  ngOnInit(): void {
    this._GamesApiService.getAllGames('','').subscribe({
      next:res=>{this.gamesArr=res
      }
    });
    
    this.favList=Array.from(this._FavouriteService.userFav())
  }
  favList!:string[]


  addToFav(id:string){
    if(this.favList.includes(id)){
      this.favList.splice(this.favList.indexOf(id),1)
      this._FavouriteService.removeFromFav(id)
    }else{
      this.favList.push(id)
      this._FavouriteService.addToFav(id);
    }
  }



  add(){
    this.cardNum+=20
  }

}
