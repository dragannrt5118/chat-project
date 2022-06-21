import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JsonServiceService } from 'src/app/service/json-service.service';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  messageContent: any
  @Output() childParent = new EventEmitter<any>();//za komunikaciju child => parent
  constructor(private connect:ChatService) { }

  ngOnInit(): void {

    this.connect.selectedDisplay$.subscribe(
      message => {
        this.messageContent = message;
        console.log(this.messageContent,'poz')
      }
    )
  }

  NewMessage(content: any)//ova metoda se poziva klikom na dugme
    {
        const data = {
                        time : Date.now(),
                        content,
                        type: "sent"                    
                    };
                    console.log(data)

        this.childParent.emit(data);//uzima podatke iz inputa koji su smesteni u data
    }

}