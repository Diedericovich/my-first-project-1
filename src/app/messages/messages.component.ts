import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
// injected services must be public if they need to be bound on 
  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
