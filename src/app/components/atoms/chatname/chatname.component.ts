import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chatname',
  templateUrl: './chatname.component.html',
  styleUrls: ['./chatname.component.scss']
})
export class ChatnameComponent {
@Input()
username: string = '';
}
