import { Component, OnInit } from '@angular/core';
import { GameSettingsService } from '../../services/GameSettings/game-settings.service';
import { GameSettingsContract } from '../../services/GameSettings/GameSettingsContract';
import { ExercisesService } from '../../services/exercises/exercises.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  
  private _elapsedTime : number = 0;
  private _exerciseTime : number = 0;
  private _recoveryTime : number = 0;
  public displayedTime : string = "";
  public displayedExerciseTime : string = "";
  public displayedRecoveryTime : string = "";
  private _intervalId : any;
  public exerciseCompleted : boolean = false;
  public nbResources : number = 0;

  private _clockInterval : any;
  private _gameSettings: GameSettingsContract;
  private _service: ExercisesService;
  public exercises: {id: number, name: string}[] = [];
  public selectedResource: string = "";
  public _nbRepetitions : number = 0;

  // TODO: set as game variable
  public resources = ['Water', 'Food'];

  constructor(private _gameSettingsService: GameSettingsService,
              private _injectedService: ExercisesService) { 
    this._gameSettings = _gameSettingsService.LoadGameSettings();
    this._service = _injectedService;
  }

  ngOnInit(): void {
  
    this._clockInterval = setInterval(
      () => {
        
        this._elapsedTime ++;
        this.displayedTime = this.getFormatSpanTime(this._elapsedTime);

      }, 1000);
  }

  public getExercises(resourceName: string){

    this.selectedResource = resourceName
    let exerciseTypeName = this._gameSettings.exerciseTypeName;
    let bodyPartName = this._gameSettings.bodyPartName;
    this._injectedService.getExercises(exerciseTypeName, bodyPartName, 3)
    .subscribe(data => {
      this.exercises = [];

      Object.keys(data).forEach(key => {
        this.exercises.push({id:parseInt(key), name:data[parseInt(key)].exercise});
      });
    });
  }

  public startGatheringExercise(){
    this.exercises = [];
    this._recoveryTime = 0;
    this._exerciseTime = this._gameSettings.exerciseTimeLength;
    
    let id = setInterval(() => 
    {
      this._exerciseTime --;
      this.displayedExerciseTime = this.getFormatSpanTime(this._exerciseTime);
    
      if (this._exerciseTime == 0){
        this.displayedExerciseTime = "";
        clearInterval(id);
        this.exerciseCompleted = true;
        this.startRecoveryTimer();
      }
    }, 1000);

  }

  private startRecoveryTimer(){
    this._exerciseTime = 0;
    this._recoveryTime = this._gameSettings.recoveryTimeLength;

    let id = setInterval(() => {
      this._recoveryTime --;
      this.displayedRecoveryTime = this.getFormatSpanTime(this._recoveryTime);

      if(this._recoveryTime == 0){
        this.displayedRecoveryTime = "";
        clearInterval(id);
      }

    }, 1000);

  }

  public setNbRepetitions(event: Event){
    this._nbRepetitions = parseInt((event.target as HTMLInputElement).value);
  }

  public submitRepetitions(){
    this._injectedService.getGatheringResult(this.selectedResource, this._nbRepetitions)
    .subscribe((data) => {
      console.log(data);
      this.nbResources += data['resourceqty'];
      this.exerciseCompleted = false;
    });
  }
  private getFormatSpanTime(nbSeconds: number) : string{

    let formattedSpanTime : string = "";
    let hours = Math.floor(nbSeconds / 3600);

    if(hours > 0){
      if (hours < 10){
        formattedSpanTime = "0"
      }
      formattedSpanTime += hours + " : ";
    }
    
    let minutes = Math.floor((nbSeconds - (hours * 3600)) / 60);
    if (minutes < 10){
      formattedSpanTime += "0";
    }
    formattedSpanTime += minutes + " : ";
    
    let seconds = nbSeconds - ((hours * 3600) + (minutes * 60))
    if(seconds < 10){
      formattedSpanTime += "0";
    }
    formattedSpanTime += seconds;

  return formattedSpanTime;
  }
}
