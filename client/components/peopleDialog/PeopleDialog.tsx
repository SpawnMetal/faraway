import React, {useState} from 'react'
import {observer} from 'mobx-react-lite'
import {Dialog, DialogContent, DialogTitle, Grid, IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import {sw} from '@stores'
import {PeopleInfo} from '../peopleInfo/PeopleInfo'
import * as style from './style'

interface Props {
  open: boolean
  handleClose: () => void
}

export const PeopleDialog = observer((props: Props) => {
  const {open, handleClose} = props
  const [editMode, setEditMode] = useState(false)

  if (!sw.value) return null

  const handleEditClick = () => {
    setEditMode(true)
  }
  const handleSaveClick = () => {
    setEditMode(false)
    sw.updateValue()
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>
        {`Details about ${sw.value.name}`}
        {editMode ? (
          <IconButton aria-label="save" onClick={handleSaveClick} sx={style.save}>
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="edit" onClick={handleEditClick} sx={style.edit}>
            <EditIcon />
          </IconButton>
        )}
      </DialogTitle>
      <IconButton aria-label="close" onClick={handleClose} sx={style.close}>
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Grid container rowSpacing={1}>
          <img style={style.img} src={`/peoples/${sw.peopleFindOriginalName()}.jpeg?w=248&fit=crop&auto=format`} alt={sw.peopleFindOriginalName()} loading="lazy" />
          <PeopleInfo parameter="name" editMode={editMode} />
          <PeopleInfo parameter="homeworld" editMode={editMode} />
          <PeopleInfo parameter="birth_year" editMode={editMode} />
          <PeopleInfo parameter="species" editMode={editMode} />
          <PeopleInfo parameter="eye_color" editMode={editMode} />
          <PeopleInfo parameter="films" editMode={editMode} />
          <PeopleInfo parameter="gender" editMode={editMode} />
          <PeopleInfo parameter="hair_color" editMode={editMode} />
          <PeopleInfo parameter="height" editMode={editMode} />
          <PeopleInfo parameter="mass" editMode={editMode} />
          <PeopleInfo parameter="skin_color" editMode={editMode} />
          <PeopleInfo parameter="starships" editMode={editMode} />
          <PeopleInfo parameter="vehicles" editMode={editMode} />
          <PeopleInfo parameter="created" editMode={editMode} />
          <PeopleInfo parameter="edited" editMode={editMode} />
        </Grid>
      </DialogContent>
    </Dialog>
  )
})
