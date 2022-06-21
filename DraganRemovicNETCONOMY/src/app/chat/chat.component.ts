import { IfStmt } from '@angular/compiler';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ChatService } from '../service/chat.service';
import { JsonServiceService } from '../service/json-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  chatList: any;
  messageContent: any;
  @ViewChildren('messages') messages: QueryList<any> = new QueryList();//pracenje promena
  constructor(private dataJSON:JsonServiceService,private connect:ChatService) { }

  ngOnInit(): void {
    this.dataJSON.getJSON().subscribe((data:any)=>{
      this.chatList=data;
    })

    this.connect.selectedDisplay$.subscribe(//pretplacuje se na podatke(tj da ih mozemo koristiti)
      message => {
        this.messageContent = message;
        let sortedMessage = this.messageContent.messages.sort((first:any, second:any) => 0 - (first.time > second.time ? -1 : 1));//za sortiranje porkuka
        console.log(sortedMessage);
      }
    )
  }

  parentText:any;

  parent(data:any){//za guranje podataka u messageContent
    this.messageContent.messages.push(data);
    console.log(data);
  }
  

}
