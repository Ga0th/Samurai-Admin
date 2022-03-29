import React from 'react';
import { Icon, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';

const Index = ({ nested, subNested, data, link }) => {
  const router = useRouter();
  const { name, icon } = data;

  const goToLink = link => {
    router.push(link);
  };

  return (
    <React.Fragment>
      <ListItem sx={{ height: '35px' }} button onClick={() => goToLink(link)}>
        <ListItemIcon color="colors.main">
          <Icon sx={{ color: 'colors.main' }}>
            {icon ? icon : 'menu'}
          </Icon>
        </ListItemIcon>
        <ListItemText sx={{ color: 'colors.main' }} primary={name} />
      </ListItem>
    </React.Fragment>
  );
};

export default Index;
