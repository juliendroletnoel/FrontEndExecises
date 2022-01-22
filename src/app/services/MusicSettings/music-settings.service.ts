import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MusicSettingsService {

  private _musicAndSoundsEnabled : boolean;
  private _currentAmbianceMusic : any;
  private _fadeStepLength : number;
  private _musicMaxVolume : number;
  private _soundMaxVolume : number;
  
  constructor() {
    this._musicAndSoundsEnabled = false;
    this._currentAmbianceMusic = null;
    this._fadeStepLength = 300;
    this._musicMaxVolume = 10; 
    this._soundMaxVolume = 6; 
  }

  public playTransitionSound(soundFileName : string, timeLength : number) : void{  
    if(!this._musicAndSoundsEnabled){
      return;
    }

    const transitionSound = new Audio('/assets/musics/' + soundFileName + '.mp3');
    transitionSound.loop = false;
    transitionSound.volume = 0.6;

    this._fadeUp(transitionSound, this._soundMaxVolume, 100);
    setTimeout(() => this._fadeDown(transitionSound, 100), timeLength);
  }

  public setCurrentAmbianceMusic(musicFileName: string) : void{
    const newAmbianceMusic = new Audio('/assets/musics/' + musicFileName + '.mp3');
    newAmbianceMusic.loop = true;

    if(this._currentAmbianceMusic != null){
      this._fadeDown(this._currentAmbianceMusic, this._fadeStepLength);
    }

    this._currentAmbianceMusic = newAmbianceMusic;

    if(!this._musicAndSoundsEnabled){
      return;
    }
    
    this._fadeUp(this._currentAmbianceMusic, this._musicMaxVolume, this._fadeStepLength);
  }


  public toggleMusic() : void {
    this._musicAndSoundsEnabled = !this._musicAndSoundsEnabled;
    
    if(this._musicAndSoundsEnabled){
      this._fadeUp(this._currentAmbianceMusic, this._musicMaxVolume, this._fadeStepLength);
    }
    else{
      this._fadeDown(this._currentAmbianceMusic, this._fadeStepLength);
    }
  }

  private _fadeUp(audioFile : any, maxVolume : number, fadeStepLength : number){
    let currentMusicVolume = 0;
    maxVolume = Math.floor(maxVolume);
    if (maxVolume < 0 || maxVolume > 10){
      maxVolume = 10;
    }
    
    audioFile.play();

    const interval = setInterval(() => {
      audioFile.volume = currentMusicVolume / 10;

      if (currentMusicVolume == maxVolume){
        clearInterval(interval);
      }

      currentMusicVolume = currentMusicVolume + 1;

    }, fadeStepLength);
  }

  private _fadeDown(audioFile : any, fadeStepLength : number){
    let currentMusicVolume = Math.floor(audioFile.volume * 10);

    const interval = setInterval(() => {
      audioFile.volume = currentMusicVolume / 10;
      if (currentMusicVolume == 0){
        audioFile.pause();
        clearInterval(interval);
      }

      currentMusicVolume = currentMusicVolume - 1;

    }, fadeStepLength);

  }
}
