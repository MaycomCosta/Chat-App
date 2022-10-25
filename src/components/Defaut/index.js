import React from 'react'
import * as C from './styles'
import { MdMessage } from 'react-icons/md'


export const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>Chat app</C.Title>
      <C.Info>agora você pode enviar e receber mensagens sem precisar manter seu celular conectado à internet</C.Info>
    </C.Container>
  )
}