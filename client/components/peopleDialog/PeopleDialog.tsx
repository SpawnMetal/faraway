import React from 'react'
import {observer} from 'mobx-react-lite'
import {Dialog, DialogContent, DialogTitle, Grid, IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {sw} from '@stores'
import {PeopleInfo} from '../peopleInfo/PeopleInfo'

interface Props {
  open: boolean
  handleClose: () => void
}

export const PeopleDialog = observer((props: Props) => {
  const {open, handleClose} = props

  if (!sw.value) return null

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>{`Details about ${sw.value.name}`}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Grid container rowSpacing={1}>
          <PeopleInfo parameter="name" />
          <PeopleInfo parameter="homeworld" />
          <PeopleInfo parameter="birth_year" />
          <PeopleInfo parameter="species" />
          <PeopleInfo parameter="eye_color" />
          <PeopleInfo parameter="films" />
          <PeopleInfo parameter="gender" />
          <PeopleInfo parameter="hair_color" />
          <PeopleInfo parameter="height" />
          <PeopleInfo parameter="mass" />
          <PeopleInfo parameter="skin_color" />
          <PeopleInfo parameter="starships" />
          <PeopleInfo parameter="vehicles" />
          <PeopleInfo parameter="created" />
          <PeopleInfo parameter="edited" />
        </Grid>
      </DialogContent>
    </Dialog>
  )
})
