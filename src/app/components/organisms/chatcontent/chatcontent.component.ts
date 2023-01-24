import { Component,Input } from '@angular/core';
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




  @Input()
  photo1 = '';

}
