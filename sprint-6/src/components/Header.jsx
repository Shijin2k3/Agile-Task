import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar
      position='static'
      sx={{
        bgcolor: '#1f2937',
        color: 'white',
        boxShadow: "none",
        width: '100%',
      }}
    >
      <Toolbar sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        <Typography
          variant='h6'
          sx={{
            flexGrow: 1,
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Material Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header