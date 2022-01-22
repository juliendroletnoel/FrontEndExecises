import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { GameSettingsService } from 'src/app/services/GameSettings/game-settings.service';
import { GameSettingsContract } from 'src/app/services/GameSettings/GameSettingsContract';
import { NumberLiteralType } from 'typescript';

@Component({
  selector: 'app-pregame',
  templateUrl: './pregame.component.html',
  styleUrls: ['./pregame.component.css']
})

export class PregameComponent implements OnInit {

  public exerciseTypes: {value: string, name:string, selected:boolean, disabled:boolean} [] = [];
  public bodyParts: {value: string, name:string, selected:boolean, disabled:boolean} [] = []
  public exerciseTimeLength: number = 60;
  public recoveryTimeLength: number = 20;
  public gameSettings: GameSettingsContract;

  private _router : Router;
  private _gameSettingsService: GameSettingsService

  constructor(private _exercisesService: ExercisesService,
              private _gameSettingsInjected: GameSettingsService, 
              private _injectedRouter: Router) 
            { 
                  this._router = _injectedRouter;
                  this._gameSettingsService = _gameSettingsInjected;
                  this.gameSettings = new GameSettingsContract();
            }

  ngOnInit(): void {
    // Fill exercises types
    this._exercisesService.getExerciseTypeNames()
    .subscribe(data => {

      // add default text option
      let name = "Select an exercise type";
      this.exerciseTypes.push({value: "", name: name, selected: true, disabled: true});
      
      // Format response for displayable purpose
      data.forEach(element => {
        let name = element[0].toUpperCase() + element.slice(1); // first letter set to uppercase
        this.exerciseTypes.push({value : element, name, selected: false, disabled : false});
      });
    });
  }

  public getAvailableBodyPartNames(event: Event){

    this.gameSettings.bodyPartNames = [];
    
    const exerciseType = (event.target as HTMLInputElement).value;
    this._exercisesService.getAvailableBodyParts(exerciseType)
    .subscribe(data =>
       {
          this.bodyParts = []

          data.forEach(value => {
            let name = value[0].toUpperCase() + value.slice(1);
            this.bodyParts.push({value, name, selected:false, disabled:false});
          });
        });
  }

  public setExerciseTimeLength(event: Event){
    this.exerciseTimeLength = parseInt((event.target as HTMLInputElement).value);
    console.log('Exercise time length : ' + this.exerciseTimeLength);
  }

  public setRecoveryTimeLength(event: Event){
    this.recoveryTimeLength = parseInt((event.target as HTMLInputElement).value);
    console.log('Recovery time length : ' + this.recoveryTimeLength);
  }

  public navigate(){

    const nbBodyPartSelected = this.gameSettings.bodyPartNames.length;

    if(nbBodyPartSelected == 0){
      alert('You must select at least one body part to focus on!');
    }
    
    else{
      this._router.navigate(['game/']);
    }
    
  }

  public saveGameSettings(){
    this._gameSettingsService.SaveGameSettings(this.gameSettings);
  }

  public onBodyPartCheckEvent(event: Event){
    const bodyPart = (event.target as HTMLInputElement).value;
    
    if(this.gameSettings.bodyPartNames.includes(bodyPart)){
      const index = this.gameSettings.bodyPartNames.indexOf(bodyPart);
      this.gameSettings.bodyPartNames.splice(index,1);
    }

    else{
      this.gameSettings.bodyPartNames.push(bodyPart);
    }

    console.log(this.gameSettings.bodyPartNames);
  }
}
