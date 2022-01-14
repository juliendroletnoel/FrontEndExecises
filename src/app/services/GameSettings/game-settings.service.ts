import { Injectable } from '@angular/core';
import { GameSettings } from './GameSettings'

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

  private _gameSettings: GameSettings;

  constructor() { 
    this._gameSettings = new GameSettings();
  }

  public SaveGameSettings(settings: GameSettings){
    this._gameSettings = settings;
  }

  public LoadGameSettings(){
    return this._gameSettings;
  }
}
