import { Component } from '@angular/core';
import { MusicSettingsService } from './services/MusicSettings/music-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'FrontEndExercises';
  private _musicService: MusicSettingsService;

  public constructor(musicService: MusicSettingsService){
    this._musicService = musicService;
  }

  public toggleMusic(){
    this._musicService.toggleMusic();
  }
}
