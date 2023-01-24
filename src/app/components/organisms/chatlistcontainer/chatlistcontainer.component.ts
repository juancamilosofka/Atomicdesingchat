import { Component, Input,  Output, EventEmitter, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/Chat';
import { ChatList } from 'src/app/models/ChatList';
@Component({
  selector: 'app-chatlistcontainer',
  templateUrl: './chatlistcontainer.component.html',
  styleUrls: ['./chatlistcontainer.component.scss']
})
export class ChatlistcontainerComponent implements OnInit  {
  @Input()
  placeholderSearch = '';
  @Input()
  buttonicon = '';


  @Input()
  chatlist?: ChatList[];

  currentchatlist? : ChatList[];
  ngOnInit() {

    this.currentchatlist = this.chatlist;

  }

findlastmessage(chatcontent: Chat[]):string{

 return chatcontent.at(-1)!.Message;
}
findlastmessagedate(chatcontent: Chat[]):Date{

return chatcontent.at(-1)!.Date;
}

chagecurrentchat(newItem: string) {
  this.newItemEvent.emit(newItem);
}

@Output() newItemEvent = new EventEmitter<string>();


imputtextevent(event: string) {

    this.currentchatlist = this.chatlist!.filter(element =>
      element.ContactName.toLowerCase().includes(event.toLowerCase())
      );

}

}
