import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/favourite.service';
import { GamesApiService } from 'src/app/games-api.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  constructor(private _GamesApiService:GamesApiService,private _FavouriteService:FavouriteService) { }
  gamesArr !:any[]
  cardNum:number = 20
  ngOnInit(): void {
    this._GamesApiService.getAllGames('category','flight').subscribe({
      next:res=>{this.gamesArr=res;console.log(this.gamesArr);
      
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
