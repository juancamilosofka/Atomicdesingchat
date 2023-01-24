import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimarybuttonComponent } from './primarybutton/primarybutton.component';
import { PrimaryinputComponent } from './primaryinput/primaryinput.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ChatnameComponent } from './chatname/chatname.component';
import { ChatlastmessageComponent } from './chatlastmessage/chatlastmessage.component';
import { ChatdateComponent } from './chatdate/chatdate.component';
import { ContactstatusComponent } from './contactstatus/contactstatus.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrimarybuttonComponent,
    PrimaryinputComponent,
    AvatarComponent,
    ChatnameComponent,
    ChatlastmessageComponent,
    ChatdateComponent,
    ContactstatusComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PrimarybuttonComponent,
    PrimaryinputComponent,
    AvatarComponent,
    ChatnameComponent,
    ChatlastmessageComponent,
    ChatdateComponent,
    ContactstatusComponent,
    MessageComponent
  ]
})
export class AtomsModule { }
