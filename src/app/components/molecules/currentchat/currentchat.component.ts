import { Component, Input } from '@angular/core';
import { Chat } from 'src/app/models/Chat';
import { ChatList } from 'src/app/models/ChatList';

@Component({
  selector: 'app-currentchat',
  templateUrl: './currentchat.component.html',
  styleUrls: ['./currentchat.component.scss']
})
export class CurrentchatComponent {
  @Input()
  messagetype: string = "messageright";

  @Input()
  messagecolor:string = "#52baf6";

  @Input()
  messagecontent:string = "";

  @Input()
  messagelist?: Chat[];

  isSended(type: string):boolean{
if (type == "sended"){
  return true
}
return false
  }
}
