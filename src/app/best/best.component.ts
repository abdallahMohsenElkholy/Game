import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FavouriteService } from '../favourite.service';
import { GamesApiService } from '../games-api.service';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.scss']
})
export class BestComponent implements OnInit {
  priArr!:any[]
  gamesArr !:any[]
  cardNum:number = 20
  favList!:string[]
  userName!:string
  constructor(private _GamesApiService:GamesApiService ,private _AuthService:AuthService ,private _FavouriteService:FavouriteService) { }
  ngOnInit(): void {
    this.favList=Array.from(this._FavouriteService.userFav())
    this._GamesApiService.getAllGames('','').subscribe({
      next:res=>{this.priArr=res ;this.makeSure()
      }
    });
    this.userName=this._AuthService.userName
  }

  makeSure(){
    this.gamesArr=this.priArr.filter(ele=>this.favList.includes(ele.id))
  }

  remove(id:string){
      this.favList.splice(this.favList.indexOf(id),1)
      this.makeSure()
      this._FavouriteService.removeFromFav(id)
  }



  add(){
    this.cardNum+=20
  }

}
