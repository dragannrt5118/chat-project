import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';
import { JsonServiceService } from '../service/json-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public userList : any;
  clickedIndex: any;
  
  constructor(private dataJSON:JsonServiceService,private connect:ChatService) { }

  ngOnInit(): void {
    this.dataJSON.getJSON().subscribe((data:any)=>{
      this.userList=data
    })
  }

  sendMessage(buttonNumber: number) {//na klik se poziva i izvlaci id kako bi znali koje podatke treba da prosledimo [0],[1],[2]
    let message = this.userList[buttonNumber];//
    this.connect.showMessage(message);//saljemo podatke servicu tacnije funkciji
  }

  activeProject(user:any) {
    user.active=!user.active;
  }

}
