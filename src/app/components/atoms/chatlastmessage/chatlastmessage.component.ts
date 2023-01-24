import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chatlastmessage',
  templateUrl: './chatlastmessage.component.html',
  styleUrls: ['./chatlastmessage.component.scss']
})
export class ChatlastmessageComponent {


  @Input()
  lastmessage: string = '';
}
