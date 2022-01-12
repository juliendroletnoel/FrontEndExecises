import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ExercisesService } from 'src/app/services/exercises/exercises.service';

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

  private _router : Router;

  constructor(private _exercisesServices: ExercisesService, 
              private _injectedRouter: Router) 
            { 
                  this._router = _injectedRouter;
            }

  ngOnInit(): void {
    // Fill exercises types
    this._exercisesServices.getExerciseTypeNames()
    .subscribe(data => {

      this.bodyParts.push({value:"", name:"Select an exercise type", selected:true, disabled:true});

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

  onChangeExercice(e: any){
    console.log(e);
  }

  public getAvailableBodyPartNames(event: Event){

    let exerciseType = (event.target as HTMLInputElement).value;
    this._exercisesServices.getAvailableBodyParts(exerciseType)
    .subscribe(data =>
       {
          this.bodyParts = []

          // add default exception
          let name = "Select a body part";
          this.bodyParts.push({value:"", name, selected:true, disabled:true});
       
          data.forEach(value => {
            name = value[0].toUpperCase() + value.slice(1);
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
    this._router.navigate(['game/']);
  }
}
