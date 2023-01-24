import { Component ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-createmessage',
  templateUrl: './createmessage.component.html',
  styleUrls: ['./createmessage.component.scss']
})
export class CreatemessageComponent {
  @Input() sendbuttonicon: string = '';
  @Input() micbuttonicon: string = '';
  @Input() emojibuttonicon: string = '';
  @Input() atachbuttonicon: string = '';
  @Input() placeholder: string = '';


  currentinputtext: string = '';


  imputtextevent(event: string) {
    this.currentinputtext = event;
  }

  @Output() newItemEvent = new EventEmitter<string>();
  sendmessage() {

    this.newItemEvent.emit(this.currentinputtext);
  }
}
