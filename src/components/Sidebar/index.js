import React from 'react'
import * as C from './styles'
import { SidebarHeader, SidebarChats } from '../index'

export const Sidebar = ({ setUserChat, userChat }) => {

  console.log(userChat)

  return (
    <C.Container>
      <SidebarHeader setUserChat={setUserChat}/>
      <SidebarChats setUserChat={setUserChat} userChat={userChat}/>
    </C.Container>
  )
}