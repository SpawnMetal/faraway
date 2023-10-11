import React from 'react'
import {observer} from 'mobx-react-lite'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import * as style from './style'

export const Header = observer(() => {
  return (
    <Box>
      <AppBar position="fixed" sx={style.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={style.title}>
            Faraway - Star Wars API
          </Typography>
          <Box sx={style.searchStyles}>
            <Box sx={style.searchIconWrapper}>
              <SearchIcon />
            </Box>
            <InputBase sx={style.styledInputBase} placeholder="Search…" inputProps={{'aria-label': 'search'}} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
})
