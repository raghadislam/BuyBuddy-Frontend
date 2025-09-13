import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { MockDataService } from '../../core/mock-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './chat-thread.page.html',
  styleUrls: ['./chat-thread.page.scss'],
  imports: [NgFor, FormsModule],
})
export class ChatThreadPage {
  id = this.route.snapshot.paramMap.get('id')!;
  messages = this.data.thread(this.id);
  text = '';
  constructor(private route: ActivatedRoute, private data: MockDataService){}
  send(){ if(!this.text.trim()) return; this.messages.push({ id: crypto.randomUUID(), fromMe:true, text:this.text, time: 'now' }); this.text=''; }
}
