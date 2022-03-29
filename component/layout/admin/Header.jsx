import { Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { SideMenu } from './SideMenu';
import { AppBar, HideOnScroll } from '../component';
import { MenuItem } from '@mui/material';

const Header = props => {
  const { open, handleDrawerOpen, drawerWidth } = props;
  return (
    <HideOnScroll {...props}>
      <AppBar sx={{ backgroundColor: 'light' }} position="fixed" open={open} drawerWidth={drawerWidth}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon sx={{ color: 'colors.main'}} /> */}
          </IconButton>
          {/* <Toolbar sx={{ flexGrow: 1 }}>
            <Typography variant="h7" sx={{ marginRight: 3, color: 'colors.main' }} component="div">
              Home
            </Typography>
            <Typography variant="h7" sx={{ marginRight: 3, color: 'colors.main' }} component="div">
              Debug
            </Typography>
            <Typography variant="h7" sx={{ marginRight: 3, color: 'colors.main' }} component="div">
              Theme
            </Typography>
          </Toolbar>
          <SideMenu /> */}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
