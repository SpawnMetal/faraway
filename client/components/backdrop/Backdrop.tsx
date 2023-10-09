import React from 'react'
import {observer} from 'mobx-react-lite'
import {Backdrop as Bdrop, CircularProgress} from '@mui/material'
import * as style from './style'

interface Props {
  open: boolean
}

export const Backdrop = observer((props: Props) => {
  const {open} = props

  return (
    <Bdrop open={open} sx={style.backdrop}>
      <CircularProgress />
    </Bdrop>
  )
})
