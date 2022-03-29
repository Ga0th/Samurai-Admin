import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import { useRouter } from 'next/router';
// import { removeUserCookie } from 'utils/cookie';
import { Search, QuestionAnswer, Notifications, FullscreenExit, Dashboard } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const SideMenu = () => {
  // const router = useRouter();
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleMenu = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const logOut = async() => {
  //   await removeUserCookie();
  //   router.push('/login');
  //   handleClose();
  // };

  return (
    <div>
      <IconButton sx={{ color: 'colors.main', marginRight: 1 }}>
        <Search />
      </IconButton>
      <IconButton sx={{ color: 'colors.main', marginRight: 1 }}>
        <QuestionAnswer />
      </IconButton>
      <IconButton sx={{ color: 'colors.main', marginRight: 1 }}>
        <Notifications />
      </IconButton>
      <IconButton sx={{ color: 'colors.main', marginRight: 1 }}>
        <FullscreenExit />
      </IconButton>
      <IconButton sx={{ color: 'colors.main', marginRight: 1 }}>
        <Dashboard />
      </IconButton>
      {/* <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu> */}
    </div>
  );
};
