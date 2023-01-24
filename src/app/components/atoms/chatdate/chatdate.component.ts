import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-chatdate',
  templateUrl: './chatdate.component.html',
  styleUrls: ['./chatdate.component.scss']
})
export class ChatdateComponent {
@Input()
lastmessagedate?: Date;
}
