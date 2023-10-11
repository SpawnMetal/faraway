import React from 'react'
import {observer} from 'mobx-react-lite'
import {Header, Peoples} from '@components'

export const Home = observer(() => {
  return (
    <>
      <Header />
      <Peoples />
    </>
  )
})
