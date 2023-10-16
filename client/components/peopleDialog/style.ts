import {SxProps} from '@mui/system'
import {Theme} from '@mui/material/styles'

export const close: SxProps<Theme> = {
  position: 'absolute',
  right: 8,
  top: 8,
  color: theme => theme.palette.grey[500],
}

export const edit: SxProps<Theme> = {
  ml: 2,
  color: theme => theme.palette.grey[500],
}

export const save: SxProps<Theme> = {
  ...edit,
}

export const img = {
  width: 'inherit',
}
