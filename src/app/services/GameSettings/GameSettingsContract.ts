export class GameSettingsContract{
    public exerciseTypeName: string;
    public bodyPartName: string;
    public exerciseTimeLength: number;
    public recoveryTimeLength: number;
  
    constructor() { 
      this.exerciseTypeName = "";
      this.bodyPartName = "";
      this.exerciseTimeLength = 60;
      this.recoveryTimeLength = 20;
    }
}