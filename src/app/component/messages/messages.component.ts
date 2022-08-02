import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../service/message/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  getMessages(): string[] {
    return this, this.messageService.getMessages();
  }

  clearMessages():void{
    this.messageService.clear();
  }
}
