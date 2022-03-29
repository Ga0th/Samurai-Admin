import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { DrawerHeader } from '../component';
import DrawerComponent from '../drawer';
import { MENU_CONSTANT, CONFIG_CONSTANT } from '../../../utils/constants';
import { Typography, Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const DrawerContainer = ({ open, handleDrawerClose, drawerWidth }) => {

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'info.main',
        }
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Logo" src="/images/logo.png" />
          </ListItemAvatar>
          <ListItemText primary={CONFIG_CONSTANT.APP_NAME} />
        </ListItem>
        {/* <Typography variant="h6">
            {CONFIG_CONSTANT.APP_NAME}
          </Typography> */}
      </DrawerHeader>
      <Divider sx={{ borderColor: 'colors.main', marginBottom: 0 }} />
      <DrawerHeader>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Manager" src="/images/1.jpg" />
          </ListItemAvatar>
          <ListItemText primary={CONFIG_CONSTANT.Admin_Name} />
        </ListItem>
      </DrawerHeader>
      <Divider sx={{ borderColor: 'colors.main', marginBottom: 2 }} />
      <DrawerComponent items={MENU_CONSTANT.MENU_DATA} />
    </Drawer>
  );
};

export default DrawerContainer;
