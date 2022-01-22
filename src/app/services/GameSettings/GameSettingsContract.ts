export class GameSettingsContract{
    public exerciseTypeName: string;
    public bodyPartNames: string[];
    public exerciseTimeLength: number;
    public recoveryTimeLength: number;
  
    constructor() { 
      this.exerciseTypeName = "";
      this.bodyPartNames = [];
      this.exerciseTimeLength = 60;
      this.recoveryTimeLength = 20;
    }
}