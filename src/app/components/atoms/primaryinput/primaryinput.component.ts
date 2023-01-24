import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primaryinput',
  templateUrl: './primaryinput.component.html',
  styleUrls: ['./primaryinput.component.scss']
})
export class PrimaryinputComponent {

  @Input()
  placeholder: string = '';
}
