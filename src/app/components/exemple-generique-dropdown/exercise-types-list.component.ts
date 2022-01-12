import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

/*@Component({
  selector: 'app-exercise-types-list',
  templateUrl: './exercise-types-list.component.html',
  styleUrls: ['./exercise-types-list.component.css'],
})
export class ExerciseTypesListComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() default: string = '';
  @Output() change: EventEmitter<any>;

  control: FormControl = new FormControl();

  public exerciseTypeSelected: boolean = false;

  constructor() {
    //this.change = new EventEmitter();
  }

  // Initialize drop down values upon construction
  ngOnInit(){
    this.control = new FormControl(this.default);
    this.control.valueChanges.subscribe(e => {
      this.change.emit(e);
    });
  }

  <-- app-exercise-types-list [items]="exerciseTypes" [default]="defaultValue" (change)="onChangeExercice($event)"></app-exercise-types-lis -->
  
}*/
