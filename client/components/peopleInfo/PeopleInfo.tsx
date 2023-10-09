import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {CircularProgress, Grid, Typography} from '@mui/material'
import {peopleModel} from '@models'
import {IPeople} from 'swapi-ts'
import {sw} from '@stores'
import * as style from './style'

interface Props {
  parameter: keyof IPeople
}

export const PeopleInfo = observer((props: Props) => {
  const {parameter} = props
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState(String(sw.value[parameter]))
  const homeworldStatusSuccess = sw.isRequestStatusSuccess('homeworld')
  const filmsStatusSuccess = sw.isRequestStatusSuccess('films')
  const speciesStatusSuccess = sw.isRequestStatusSuccess('species')
  const starshipsStatusSuccess = sw.isRequestStatusSuccess('starships')
  const vehiclesStatusSuccess = sw.isRequestStatusSuccess('vehicles')

  useEffect(() => {
    switch (parameter) {
      case 'homeworld':
        setLoading(true)
        break
      case 'films':
        setLoading(true)
        break
      case 'species':
        setLoading(true)
        break
      case 'starships':
        setLoading(true)
        break
      case 'vehicles':
        setLoading(true)
        break
      case 'created':
        setValue(new Date(value).toLocaleString())
        break
      case 'edited':
        setValue(new Date(value).toLocaleString())
        break
    }
  }, [])

  useEffect(() => {
    switch (parameter) {
      case 'homeworld':
        if (!homeworldStatusSuccess) break
        setLoading(false)
        setValue(sw.value[parameter]['name'])
        break
      case 'films':
        if (!filmsStatusSuccess) break
        setLoading(false)
        setValue(
          sw.value[parameter]
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(item => `Episode ${item['episode_id']}: ${item['title']}`)
            .join(', '),
        )
        break
      case 'species':
        if (!speciesStatusSuccess) break
        setLoading(false)
        if (!sw.value[parameter]?.length) setValue('-')
        else setValue(sw.value[parameter].map(item => item['name']).join(', '))
        break
      case 'starships':
        if (!starshipsStatusSuccess) break
        setLoading(false)
        if (!sw.value[parameter]?.length) setValue('-')
        else setValue(sw.value[parameter].map(item => item['name']).join(', '))
        break
      case 'vehicles':
        if (!vehiclesStatusSuccess) break
        setLoading(false)
        if (!sw.value[parameter]?.length) setValue('-')
        else setValue(sw.value[parameter].map(item => item['name']).join(', '))
        break
    }
  }, [homeworldStatusSuccess, filmsStatusSuccess, speciesStatusSuccess, starshipsStatusSuccess, vehiclesStatusSuccess])

  return (
    <>
      <Grid item xs={3}>
        <Typography sx={style.title}>{peopleModel[parameter].title}</Typography>
      </Grid>
      <Grid item xs={9}>
        {loading ? <CircularProgress size={20} /> : <Typography>{value}</Typography>}
      </Grid>
    </>
  )
})
