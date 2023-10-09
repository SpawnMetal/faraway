import {SxProps} from '@mui/system'

export const imageList: SxProps = {width: '100%', height: '100%'}

export const title: SxProps = {
  '.MuiImageListItemBar-title': {
    justifyContent: 'center',
    display: 'flex',
  },
}

export const img: SxProps = {
  overflow: 'hidden',
  img: {
    display: 'block',
    transition: '.5s',
  },
  'img:hover': {
    transform: 'scale(1.2)',
  },
}
