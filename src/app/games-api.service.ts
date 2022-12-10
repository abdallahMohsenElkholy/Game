import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GamesApiService {

  constructor(private _http:HttpClient) { }

  getAllGames(term1:string,term2:string):Observable<any>
  {
    const param =new HttpParams().set(term1,term2)
    const headers = new HttpHeaders()
    .set('X-RapidAPI-Key','b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68')
    .set('X-RapidAPI-Host','free-to-play-games-database.p.rapidapi.com');
    return this._http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games` , {headers: headers ,params:param})
    
  }
  getGameDetails(term:string):Observable<any>
  {
    const headers = new HttpHeaders()
    .set('X-RapidAPI-Key','b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68')
    .set('X-RapidAPI-Host','free-to-play-games-database.p.rapidapi.com');
    return this._http.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${term}` , {headers: headers })
    
  }



}
