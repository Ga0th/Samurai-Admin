import React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { useRouter } from 'next/router';
import MenuNode from './menuNode';

const Index = ({ handleClick, menu, item, nested }) => {
  const router = useRouter();

  // open menu if location is same
  if (router) {
    if (item) {
      if (item.subitems) {
        item.subitems.forEach(em1 => {
          if (em1.subitems) {
            em1.subitems.forEach(em2 => {
              if (router.pathname.includes(`${em2.link}`)) {
                menu[em1.id] = true;
                menu[item.id] = true;
              }
            });
          } else {
            if (router.pathname.includes(`${em1.link}`)) {
              menu[item.id] = true;
            }
          }
        });
      } else {
        if (router.pathname.includes(`${item.id}`)) {
          menu[item.id] = true;
        }
      }
    }
  }

  return (
    <React.Fragment>
      <ListItem
        button
        onClick={() => {
          handleClick(item.id);
        }}
      >
        <ListItemIcon color="colors.main">
          <Icon>
            {item.icon ? item.icon : 'menu'}
          </Icon>
        </ListItemIcon><ListItemText primary={item.name} />
        {menu[item.id] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse component="li" in={menu[item.id]} timeout="auto" unmountOnExit>
        <List component="nav">
          {item.subitems.map(sitem => {
            return sitem.subitems != null
              ? <Index
                key={`SubMenuCollapse${sitem.id}`}
                menu={menu}
                item={sitem}
                handleClick={() => {
                  handleClick(sitem.id);
                }}
              />
              : <MenuNode
                key={`SubMenuNode${sitem.id}`}
                data={sitem}
                link={`/${item.link}/${sitem.link}`}
                nested={true}
                subNested={nested}
              />;
          })}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default Index;
