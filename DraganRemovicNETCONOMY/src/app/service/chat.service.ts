import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private obj = new Subject<any>();
  selectedDisplay$ = this.obj.asObservable();//chat osluskuje promene

  constructor() { }

  showMessage(message: any) {//prima podatke iz user-list i gura ih u obj, a obj osluskuje chat
    this.obj.next(message);
  }
}
