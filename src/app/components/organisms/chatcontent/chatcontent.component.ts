import { Component,Input,Output , EventEmitter} from '@angular/core';
import { Chat } from 'src/app/models/Chat';
import { ChatList } from 'src/app/models/ChatList';

@Component({
  selector: 'app-chatcontent',
  templateUrl: './chatcontent.component.html',
  styleUrls: ['./chatcontent.component.scss']
})
export class ChatcontentComponent {

  @Input()
  placeholder = '';
  @Input()
  buttonicon = '';
  @Input()
  sendbuttonicon = "";
  @Input()
  atachbuttonicon = '';
  @Input()
  emojibuttonicon = '';
  @Input()
  micbuttonicon = '';
  @Input()
  dotmenuicon = "";
  @Input()
  searchicon = "";

  @Input()
  chatlist?: ChatList ;



  @Output() newItemEvent = new EventEmitter<string>();
  sendmessage(event: string) {
    console.log(event);
    this.newItemEvent.emit(event);
  }
}
