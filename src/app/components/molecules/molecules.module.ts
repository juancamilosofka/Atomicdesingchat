import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AtomsModule } from '../atoms/atoms.module';
import { ChatcardComponent } from './chatcard/chatcard.component';
import { CreatemessageComponent } from './createmessage/createmessage.component';
import { CurrentchatbannerComponent } from './currentchatbanner/currentchatbanner.component';
import { CurrentchatComponent } from './currentchat/currentchat.component';


@NgModule({
  declarations: [
    SearchbarComponent,
    ChatcardComponent,
    CreatemessageComponent,
    CurrentchatbannerComponent,
    CurrentchatComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    SearchbarComponent,
    ChatcardComponent,
    CreatemessageComponent,
    CurrentchatbannerComponent,
    CurrentchatComponent
  ]
})
export class MoleculesModule { }
