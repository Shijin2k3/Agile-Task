import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import reactLogo from '../assets/react.png';
import PersonIcon from '@mui/icons-material/Person';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import DvrIcon from '@mui/icons-material/Dvr';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import PinDropIcon from '@mui/icons-material/PinDrop';
import NotificationsIcon from '@mui/icons-material/Notifications';

const cardStyle = {
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'cyan',
    color: "black",
    '& .MuiListItemIcon-root': {
      color: 'black',
    }
  }
}
const activeStyle = {
  backgroundColor: 'cyan',
  color: 'black',
  '& .MuiListItemIcon-root': {
    color: 'black',
  }
};

const SideBar = () => {
  const isSmall = useMediaQuery('(max-width:600px)');

  return (
    <Drawer
      variant='permanent'
      sx={{
        width: isSmall ? 64 : 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isSmall ? 64 : 240,
          bgcolor: '#1f2937',
          color: 'white',
          overflowX: 'hidden',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          minHeight: 56,
        }}
      >
        <img src={reactLogo} alt="React Logo" style={{ width: 30, height: 30, marginRight: isSmall ? 0 : 8 }} />
        {!isSmall && (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              letterSpacing: 1
            }}
          >
            CREATIVE TIM
          </Typography>
        )}
      </Box>
      <Divider sx={{ mb: 4, mt: 3, bgcolor: "white" }} />
      <List>
        <ListItem button sx={{ ...cardStyle, ...activeStyle }}>
          <ListItemIcon sx={{ color: "white" }}><DashboardIcon /></ListItemIcon>
          {!isSmall && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem button sx={cardStyle}>
          <ListItemIcon sx={{ color: "white" }}><PersonIcon /></ListItemIcon>
          {!isSmall && <ListItemText primary="User Profile" />}
        </ListItem>
        <ListItem button sx={cardStyle}>
          <ListItemIcon sx={{ color: "white" }}><TabletAndroidIcon /></ListItemIcon>
          {!isSmall && <ListItemText primary="Table List" />}
        </ListItem>
        <ListItem button sx={cardStyle}>
          <ListItemIcon sx={{ color: "white" }}><DvrIcon /></ListItemIcon>
          {!isSmall && <ListItemText primary="Typography" />}
        </ListItem>
        <ListItem button sx={cardStyle}>
          <ListItemIcon sx={{ color: "white" }}><CrisisAlertIcon /></ListItemIcon>
          {!isSmall && <ListItemText primary="Icons" />}
        </ListItem>
        <ListItem button sx={cardStyle}>
          <ListItemIcon sx={{ color: "white" }}><PinDropIcon /></ListItemIcon>
          {!isSmall && <ListItemText primary="Maps" />}
        </ListItem>
        <ListItem button sx={cardStyle}>
          <ListItemIcon sx={{ color: "white" }}><NotificationsIcon /></ListItemIcon>
          {!isSmall && <ListItemText primary="Notification" />}
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideBar