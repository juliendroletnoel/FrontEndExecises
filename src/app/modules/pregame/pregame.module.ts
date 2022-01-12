import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PregameComponent } from 'src/app/pages/pregame/pregame.component';
import { PregameRoutingModule } from './pregame-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyPartsListComponent } from 'src/app/components/body-parts-list/body-parts-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PregameComponent,
    BodyPartsListComponent,
  ],
  imports: [
    CommonModule,
    PregameRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PregameModule { }
