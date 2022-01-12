import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PregameComponent } from 'src/app/pages/pregame/pregame.component';

const routes: Routes = [
	{
		path: "pregame",
		component: PregameComponent
	  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PregameRoutingModule { }