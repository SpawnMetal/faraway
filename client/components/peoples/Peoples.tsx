import React, {useEffect, useState} from 'react'
import {ImageList, ImageListItem, ImageListItemBar, Typography} from '@mui/material'
import {observer} from 'mobx-react-lite'
import * as style from './style'
import {sw} from '@stores'
import {InfiniteScroll, PeopleDialog} from '@components'
import {IPeople} from '@utils'
import {useNavigate} from 'react-router-dom'

export const Peoples = observer(() => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (sw.peopleUrlName) {
      let index
      const value = sw.peoples.resources.find(({value}, i) => {
        if (value.name === sw.peopleUrlName) {
          index = i
          return true
        }

        return false
      })?.value

      if (value) {
        sw.value = value
        sw.newValue = {}
        sw.populateAll(index)
        setOpen(true)
      }
    }
  }, [])

  const handleClickOpen = (value: IPeople, index: number) => {
    sw.value = value
    sw.newValue = {}
    sw.populateAll(index)
    setOpen(true)
    navigate(`?people=${value.name}`)
  }

  const handleClose = () => {
    setOpen(false)
    navigate(`/`)

    if (sw.peopleUrlName) {
      sw.peopleUrlName = ''
      sw.getSwApp()
    }
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
      {!sw.peopleUrlName && (
        <ImageList sx={style.imageList} cols={4} gap={0}>
          <InfiniteScroll data={sw.peoples.resources} renderItem={renderItem} />
        </ImageList>
      )}
      <PeopleDialog open={open} handleClose={handleClose} />
    </>
  )
})
