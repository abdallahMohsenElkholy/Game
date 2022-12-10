import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  
  constructor(private _AuthService:AuthService) { this.userFav()}
  id=this._AuthService.getUserData()
  userFav()
  {
    if(localStorage.getItem(this.id)!=null){
      let arr:string[]
      arr=JSON.parse(localStorage.getItem(this.id)!)
      console.log([...arr]);
      
      arr.forEach(ele=>{console.log(ele);
      })
      return arr
    }else{
      return  ''
    }
  }


  fav:string[]=[]

  addToFav(id:string){
    if(localStorage.getItem(this.id)!=null){this.fav.push(...JSON.parse(localStorage.getItem(this.id)!))}
    this.fav.push(id)
    this.fav=[...new Set(this.fav)]
    localStorage.setItem(this.id,JSON.stringify(this.fav))
    this.userFav()

  }

  removeFromFav(id:string){
    console.log('del');
    
    let currentArr=Array.from(this.userFav())
    console.log(currentArr);
    
    let index = currentArr.indexOf(id)
    console.log(index);
    
    if(index>-1){
      currentArr.splice(index,1)
      localStorage.setItem(this.id,JSON.stringify(currentArr))
      this.userFav()
    }
  }






}
