import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()

export class JsonServiceService {

  jsonUrl='assets/json/conversation.json';//putanja do json file

  constructor(private http: HttpClient) { }

  getJSON():Observable<any>{//funkcija za izvlacenje podataka iz JSON file
    return this.http.get(this.jsonUrl).pipe(
      map((res:any)=>{
        return res;
      })
    );
  }

}
