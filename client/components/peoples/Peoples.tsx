import React, {useState} from 'react'
import {ImageList, ImageListItem, ImageListItemBar, Typography} from '@mui/material'
import {observer} from 'mobx-react-lite'
import * as style from './style'
import {sw} from '@stores'
import {InfiniteScroll, PeopleDialog} from '@components'
import {IPeople} from 'swapi-ts'
import {populateAll} from '@api'

export const Peoples = observer(() => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = (value: IPeople, index: number) => {
    sw.value = value
    sw.newValue = {}
    populateAll(index)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const renderItem = ({value}, index) => {
    return (
      <ImageListItem key={`img_${value.name}`} sx={style.img} onClick={() => handleClickOpen(value, index)}>
        <img src={`/peoples/${value.name}.jpeg?w=248&fit=crop&auto=format`} alt={value.name} loading="lazy" />
        <ImageListItemBar sx={style.title} title={value.name} />
      </ImageListItem>
    )
  }

  return sw.peoples.resources.length === 0 ? (
    <Typography sx={style.textEmptySearchResult} variant="h6">
      По Вашему запросу ничего не найдено!
    </Typography>
  ) : (
    <>
      <ImageList sx={style.imageList} cols={4} gap={0}>
        <InfiniteScroll data={sw.peoples.resources} renderItem={renderItem} />
      </ImageList>
      <PeopleDialog open={open} handleClose={handleClose} />
    </>
  )
})
