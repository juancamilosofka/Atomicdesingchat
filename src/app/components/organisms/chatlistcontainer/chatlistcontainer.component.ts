import { Component, Input,  Output, EventEmitter  } from '@angular/core';
import { Chat } from 'src/app/models/Chat';
import { ChatList } from 'src/app/models/ChatList';
@Component({
  selector: 'app-chatlistcontainer',
  templateUrl: './chatlistcontainer.component.html',
  styleUrls: ['./chatlistcontainer.component.scss']
})
export class ChatlistcontainerComponent {
  @Input()
  placeholderSearch = '';
  @Input()
  buttonicon = '';


  @Input()
  chatlist?: ChatList[];

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



}
