import { Chat } from "./Chat"
export type ChatList = {
  ContactId: string,
  Status: string,
  ContactName: string,
  ContactImageUrl: string,
  ChatMessageList: Chat[]
}
