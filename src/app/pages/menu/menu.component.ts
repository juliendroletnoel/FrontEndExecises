import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MusicSettingsService } from 'src/app/services/MusicSettings/music-settings.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private _router: Router;
  private _musicService : MusicSettingsService;

  constructor(_injectedRouter : Router, musicService : MusicSettingsService) {

    this._router = _injectedRouter;
    this._musicService = musicService;
   }

  ngOnInit(): void {
    this._musicService.setCurrentAmbianceMusic('ambiance-calm-ocean');
  }

  public navigate(){
    this._musicService.playTransitionSound('transition-beats-drums', 4000);
    setTimeout(() => this._router.navigate(['pregame/']), 1000);
  }

}
