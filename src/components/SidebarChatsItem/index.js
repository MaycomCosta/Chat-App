import React from 'react'
import * as C from './styles'
import { db } from '../../services/firebase'
import { MdPerson } from 'react-icons/md'
import { useCollection } from 'react-firebase-hooks/firestore'

const getUser = (users, userLogged) => users?.filter((user) => user !== userLogged?.email)[0]

export const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {

    const [getUserItem] = useCollection(
        db.collection('users').where('email', '==', getUser(users, user))
    )

    const Avatar = getUserItem?.docs?.[0]?.data()
    console.log(Avatar)
    const item = getUser(users, user)
    
    const handleNewChat = () => {
        const userChat = {
            chatId: id,
            name: item.split('@')[0],
            photoURL: Avatar?.photoURL,
          }

        setUserChat(userChat)
    }

  return (
    <C.Container onClick={handleNewChat} className={active}>
        {Avatar ? <C.Avatar src={Avatar?.photoURL} /> : <MdPerson/>}
        <C.Name>{item.split('@')[0]}</C.Name>
    </C.Container>
  )
}