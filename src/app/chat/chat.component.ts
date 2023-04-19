import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages : Message[] = [];
  value :string | undefined
  constructor(public ChatService:ChatService){}

  ngOnInit() : void {

  }
}
