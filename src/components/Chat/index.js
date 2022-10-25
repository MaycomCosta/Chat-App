import React from 'react'
import * as C from './styles'
import { ChatHeader, ChatBody, ChatFooter, Default } from '../index'

export const Chat = ({ userChat }) => {
    if (!userChat) return <Default />

    console.log(userChat)

  return (
    <C.Container>
        <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
        <ChatBody chatId={userChat?.chatId}/>
        <ChatFooter chatId={userChat?.chatId}/>
    </C.Container>
  )
}
