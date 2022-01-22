import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private _router: Router;
  private _oceanAmbiance;
  private _mysteriousTransition;

  constructor(private _injectedRouter : Router) {

    this._router = _injectedRouter;
    this._oceanAmbiance = new Audio('/assets/musics/ambiance-calm-ocean.mp3');
    this._oceanAmbiance.volume = 0.5;
    this._mysteriousTransition = new Audio('/assets/musics/transition-mysterious.mp3');
    this._mysteriousTransition.volume = 0.4;
   }

  ngOnInit(): void {
    //this._oceanAmbiance.play();
  }

  public navigate(){
    
    let volume = this._oceanAmbiance.volume * 10;
    let timeOut = setInterval(() => {
      volume --;
      this._oceanAmbiance.volume = (volume/10);
      console.log(this._oceanAmbiance.volume);

      if(this._oceanAmbiance.volume <= 0){
        this._mysteriousTransition.play();
        clearInterval(timeOut);
      }
    
    },
      100);
      
    setTimeout(() => this._router.navigate(['pregame/']), 15000);
  }

}
