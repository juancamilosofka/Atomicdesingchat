import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currentchatbanner',
  templateUrl: './currentchatbanner.component.html',
  styleUrls: ['./currentchatbanner.component.scss']
})
export class CurrentchatbannerComponent {
  @Input()
  username:string = '';

  @Input()
  photo: string = '';

  @Input()
  dotmenuicon: string = '';
  @Input()
  searchicon:  string = '';
  @Input()
  status: string = '';

}
