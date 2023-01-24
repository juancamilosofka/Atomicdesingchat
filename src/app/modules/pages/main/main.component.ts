import { Component, OnInit } from '@angular/core';
import { ChatList } from 'src/app/models/ChatList';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit  {

  placeholderSearch = 'Search';
  placeholder = 'Write a message';

  buttonicon = 'bi bi-send';
  sendbuttonicon = "bi bi-send";
  atachbuttonicon = 'bi bi-paperclip';
  emojibuttonicon = 'bi bi-emoji-laughing';
  micbuttonicon = 'bi bi-mic-fill';
  listbuttonicon = "bi bi-list";
  dotmenuicon = "bi bi-three-dots-vertical";
  searchicon = "bi bi-search";

  currentchat?: ChatList;

  ngOnInit(): void {
    this.currentchat = this.user.Chatlist[0];
  }

  chagecurrentchat(newItem: string) {
    this.currentchat = this.user.Chatlist.filter(element =>  element.ContactName == newItem
    )[0];
  }
  sendmessage(newMessage: string) {

    this.user.Chatlist.forEach(element => {
      if ( element.ContactId == this.currentchat?.ContactId){

      element.ChatMessageList.push({
        Id: element.ChatMessageList.length + 1,
        Message: newMessage,
        Date: new Date() ,
        Type: "sended"
      }
        )

    }});

  }

  user: User =  {
    Id: "1",
  name: "Camilo",
  Chatlist: [ {
    ContactId: "2",
    Status: "offline",
    ContactName: "Beethoven",
    ContactImageUrl: "beethoven.jpg",
    ChatMessageList: [{
      Id: 1,
      Message: "am 6ten Juli Morgends.",
      Date:  new Date("1812/07/05"),
      Type: "recived"
    },
    {
      Id: 2,
      Message: "Mein Engel, mein alles, mein Ich.“",
      Date:  new Date("1812/07/05"),
      Type: "recived"
    },
    {
      Id: 3,
      Message: "erst bis morgen ist meine Wohnung sicher bestimmt, welcher Nichtswürdiger Zeitverderb in d.g.",
      Date:  new Date("1812/07/05"),
      Type: "recived"
    },
    {
      Id: 5,
      Message: "Entschuldigung falches chat",
      Date:  new Date("1812/07/05"),
      Type: "recived"
    }
  ]
  },
  {
    ContactId: "3",
    Status: "online",
    ContactName: "Alejandra",
    ContactImageUrl: "cat.jpg",
    ChatMessageList: [{
      Id: 1,
      Message: "Holaaaa",
      Date:  new Date("2023/01/05"),
      Type: "recived"
    },
    {
      Id: 6,
      Message: "Holaaaaaaaaa",
      Date:  new Date("2023/07/05"),
      Type: "sended"
    },
    {
      Id: 7,
      Message: "Como estas????",
      Date:  new Date("2023/07/05"),
      Type: "sended"
    }]
  }
  ]
}


}
