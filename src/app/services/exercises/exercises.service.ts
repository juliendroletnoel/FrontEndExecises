import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'any',
})
export class ExercisesService {

  private _baseUrl: string = "http://localhost:8080/thedesertedisland";
  private _requestHeader = {
    headers: new HttpHeaders({
      'Accept' : 'application/json'
    })
  };

  constructor(protected http: HttpClient) { }

  getExerciseTypeNames(): Observable<string[]>{
    return this.http.get<string[]>(`${this._baseUrl}/exercisetypes`, this._requestHeader);
  }

  getAvailableBodyParts(exerciseTypeName: string): Observable<string[]>{
    return this.http.get<string[]>(`${this._baseUrl}/bodyparts?exercisetypeparam=${exerciseTypeName}`)
  }

  getExercises(exerciseTypeName: string, bodyPartName: string, nbExercises: number): Observable<any[]>{
    
    if (nbExercises == NaN){
      nbExercises = 3;
    }
    
    return this.http.get<any[]>(`${this._baseUrl}/gather?exercisetypeparam=${exerciseTypeName}&bodypartparam=${bodyPartName}&nbexercisesparam=${nbExercises}`);
  }
}
