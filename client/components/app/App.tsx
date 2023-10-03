import {getSw} from '@api'
import React, {useEffect} from 'react'

export function App() {
  // useEffect(() => {getSw()}, [])

  return <div onClick={getSw}>Worked!</div>
}
