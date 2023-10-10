import React, {useMemo} from 'react'
import {ImageList, ImageListItem, ImageListItemBar} from '@mui/material'
import {observer} from 'mobx-react-lite'
import * as style from './style'
import {sw} from '@stores'
import {PeopleDialog} from '@components'
import {IPeople} from 'swapi-ts'
import {populateAll} from '@api'

export const Peoples = observer(() => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = (value: IPeople, index: number) => {
    sw.value = value
    populateAll(index)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const peoplesMemo = useMemo(() => {
    return sw.peoples.resources.map(({value}, index) => (
      <ImageListItem key={`img_${value.name}`} sx={style.img} onClick={() => handleClickOpen(value, index)}>
        <img src={`/peoples/${value.name}.jpeg?w=248&fit=crop&auto=format`} alt={value.name} loading="lazy" />
        <ImageListItemBar sx={style.title} title={value.name} />
      </ImageListItem>
    ))
  }, [sw.peoples])

  return (
    <>
      <ImageList sx={style.imageList} cols={4} gap={0}>
        {peoplesMemo}
      </ImageList>
      <PeopleDialog open={open} handleClose={handleClose} />
    </>
  )
})
