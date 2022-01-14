import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private _elapsedTime : number = 0;
  public displayedTime : string = "";
  private _clockInterval : any;

  constructor() { }

  ngOnInit(): void {
  
    this._clockInterval = setInterval(
      () => {
      
        this._elapsedTime++;
        this.displayedTime = "";
        let minutes = Math.floor(this._elapsedTime / 60);
        
        if (minutes < 10){
          this.displayedTime = "0";
        }

        this.displayedTime += minutes + " : ";
        
        let seconds = this._elapsedTime - (minutes * 60)

        if(seconds < 10){
          this.displayedTime += "0";
        }

        this.displayedTime+=seconds;

      }, 1000);
  }

  public startGatheringActivity(resourceType: string){

  }



}
