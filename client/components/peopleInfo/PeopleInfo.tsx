import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {CircularProgress, Grid, TextField, Typography} from '@mui/material'
import {peopleModel} from '@models'
import {IPeople} from '@utils'
import {sw} from '@stores'
import * as style from './style'
import {getDate} from '@helpers'

interface Props {
  parameter: keyof IPeople
  editMode: boolean
}

export const PeopleInfo = observer((props: Props) => {
  const {parameter, editMode} = props
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState(String(sw.value[parameter]))
  const homeworldStatusSuccess = sw.isRequestStatusSuccess('homeworld')
  const filmsStatusSuccess = sw.isRequestStatusSuccess('films')
  const speciesStatusSuccess = sw.isRequestStatusSuccess('species')
  const starshipsStatusSuccess = sw.isRequestStatusSuccess('starships')
  const vehiclesStatusSuccess = sw.isRequestStatusSuccess('vehicles')
  const homeworldStatusError = sw.isRequestStatusError('homeworld')
  const filmsStatusError = sw.isRequestStatusError('films')
  const speciesStatusError = sw.isRequestStatusError('species')
  const starshipsStatusError = sw.isRequestStatusError('starships')
  const vehiclesStatusError = sw.isRequestStatusError('vehicles')

  useEffect(() => {
    setValue(String(sw.value[parameter]))
  }, [sw.value[parameter]])

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
        setValue(getDate(value))
        break
      case 'edited':
        setValue(getDate(value))
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
        if (!sw.value[parameter]?.length) setValue('unknown')
        else setValue(sw.value[parameter].map(item => item['name']).join(', '))
        break
      case 'starships':
        if (!starshipsStatusSuccess) break
        setLoading(false)
        if (!sw.value[parameter]?.length) setValue('unknown')
        else setValue(sw.value[parameter].map(item => item['name']).join(', '))
        break
      case 'vehicles':
        if (!vehiclesStatusSuccess) break
        setLoading(false)
        if (!sw.value[parameter]?.length) setValue('unknown')
        else setValue(sw.value[parameter].map(item => item['name']).join(', '))
        break
    }
  }, [homeworldStatusSuccess, filmsStatusSuccess, speciesStatusSuccess, starshipsStatusSuccess, vehiclesStatusSuccess])

  useEffect(() => {
    switch (parameter) {
      case 'homeworld':
        if (!homeworldStatusError) break
        setLoading(false)
        setValue('Failed to load data, try again later')
        break
      case 'films':
        if (!filmsStatusError) break
        setLoading(false)
        setValue('Failed to load data, try again later')
        break
      case 'species':
        if (!speciesStatusError) break
        setLoading(false)
        setValue('Failed to load data, try again later')
        break
      case 'starships':
        if (!starshipsStatusError) break
        setLoading(false)
        setValue('Failed to load data, try again later')
        break
      case 'vehicles':
        if (!vehiclesStatusError) break
        setLoading(false)
        setValue('Failed to load data, try again later')
        break
    }
  }, [homeworldStatusError, filmsStatusError, speciesStatusError, starshipsStatusError, vehiclesStatusError])

  // @ts-ignore
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => (sw.newValue[parameter] = event.target.value)

  return (
    <>
      <Grid item xs={3}>
        <Typography sx={style.title}>{peopleModel[parameter].title}</Typography>
      </Grid>
      <Grid item xs={9}>
        {loading ? (
          <CircularProgress size={20} />
        ) : editMode && peopleModel[parameter].edit !== false ? (
          <TextField id="standard-basic" defaultValue={value} fullWidth variant="standard" onInput={handleInput} />
        ) : (
          <Typography>{value}</Typography>
        )}
      </Grid>
    </>
  )
})
