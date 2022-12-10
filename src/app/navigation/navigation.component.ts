import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private _AuthService:AuthService ) { }
  checkLogin:boolean = false;


  logOut(){
    this._AuthService.logOut()
  }

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>{
        if (this._AuthService.userData.getValue()!=null) {
          this.checkLogin = true
        }else{
          this.checkLogin=false
        }
      }
    })
  }
}
