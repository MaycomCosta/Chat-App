import React from 'react'
import * as C from './styles'
import { auth } from '../../services/firebase'
import { useAuthState  } from 'react-firebase-hooks/auth'

export const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth)

  return (
    <C.Container>
      <C.Line className={userLoggedIn?.email === user ? 'me' : ''}>
        <C.Content>
          <C.Message>{message.message}</C.Message>
          <C.MessageDate>
            {new Date(message?.timestamp).toLocaleString()}
          </C.MessageDate>
        </C.Content>
      </C.Line>
    </C.Container>
  )
}