import React from 'react'
import {observer} from 'mobx-react-lite'
import {Dialog, DialogContent, DialogTitle, IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {sw} from '@stores'

interface Props {
  open: boolean
  handleClose: () => void
}

export const PeopleDialog = observer((props: Props) => {
  const {open, handleClose} = props

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'xl'}>
      <DialogTitle>{`Details about ${sw?.value?.name}`}</DialogTitle>
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
      <DialogContent></DialogContent>
    </Dialog>
  )
})
