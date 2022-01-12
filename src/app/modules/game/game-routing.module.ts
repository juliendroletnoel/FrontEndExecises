import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from 'src/app/pages/game/game.component';

const routes: Routes = [
	{
		path: "game",
		component: GameComponent
	  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }