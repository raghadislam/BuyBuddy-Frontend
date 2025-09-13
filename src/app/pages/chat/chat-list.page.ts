import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../core/mock-data.service';

@Component({
  standalone: true,
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
  imports: [NgFor, NgIf, RouterLink],
})
export class ChatListPage {
  chats = this.data.chats;
  constructor(private data: MockDataService){}
}
