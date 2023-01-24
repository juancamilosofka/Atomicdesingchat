import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  @Input() buttonicon: string = '';
  @Input() placeholder: string = '';


  @Output() newItemEvent = new EventEmitter<string>();

  imputtextevent(event: string) {
    console.log(event)
    this.newItemEvent.emit(event);
  }
}
