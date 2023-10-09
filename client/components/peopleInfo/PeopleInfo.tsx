import React from 'react'
import {observer} from 'mobx-react-lite'
import {Grid, Typography} from '@mui/material'
import {peopleModel} from '@models'
import {IPeople} from 'swapi-ts'
import {sw} from '@stores'
import * as style from './style'

interface Props {
  parameter: keyof IPeople
}

export const PeopleInfo = observer((props: Props) => {
  const {parameter} = props
  let value = String(sw.value[parameter])

  switch (parameter) {
    case 'created':
      value = new Date(value).toLocaleString()
      break
    case 'edited':
      value = new Date(value).toLocaleString()
      break
    default:
  }

  return (
    <>
      <Grid item xs={3}>
        <Typography sx={style.title}>{peopleModel[parameter].title}</Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography>{value}</Typography>
      </Grid>
    </>
  )
})
