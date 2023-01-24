import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contactstatus',
  templateUrl: './contactstatus.component.html',
  styleUrls: ['./contactstatus.component.scss']
})

export class ContactstatusComponent {

  @Input()
  status: string = 'Offline';

}
