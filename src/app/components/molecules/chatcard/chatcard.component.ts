import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chatcard',
  templateUrl: './chatcard.component.html',
  styleUrls: ['./chatcard.component.scss']
})
export class ChatcardComponent {

  @Input()
  username:string = '';

  @Input()
  photo: string = '';

  @Input()
  lastmessagedate?: Date;
  @Input()
  lastmessage: string = '';


    @Output() newItemEvent = new EventEmitter<string>();

    changechat() {
      this.newItemEvent.emit(this.username);
    }
}
