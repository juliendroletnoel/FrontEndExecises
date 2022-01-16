import { Injectable } from '@angular/core';
import { GameSettingsContract } from './GameSettingsContract'

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

  private _gameSettings: GameSettingsContract;

  constructor() { 
    this._gameSettings = new GameSettingsContract();
  }

  public SaveGameSettings(settings: GameSettingsContract){
    this._gameSettings = settings;
  }

  public LoadGameSettings(){
    return this._gameSettings;
  }
}
