import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatlistcontainerComponent } from './chatlistcontainer/chatlistcontainer.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { ChatcontentComponent } from './chatcontent/chatcontent.component';



@NgModule({
  declarations: [
    ChatlistcontainerComponent,
    ChatcontentComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule
  ],
  exports: [
    ChatlistcontainerComponent,
    ChatcontentComponent
  ]
})
export class OrganismsModule { }
