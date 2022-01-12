import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/menu/menu.module').then(module => module.MenuModule),
  },
  {
    path: 'pregame/',
    loadChildren: () => import('./modules/pregame/pregame.module').then(module => module.PregameModule),
  },
  {
    path: 'game/',
    loadChildren: () => import('./modules/game/game.module').then(module => module.GameModule),
  },
  //{path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
