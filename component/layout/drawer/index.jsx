import { Divider, List, ListSubheader } from "@mui/material";
import React from "react";
import MenuCollapse from "./menuCollapse";
import MenuNode from "./menuNode";

const Index = ({ items }) => {
  const [menu, setMenu] = React.useState([]);
  const [update, setUpdate] = React.useState(false);

  const handleClick = e => {
    console.log('e', e);
    menu[e] = !menu[e];
    setMenu(menu);
    setUpdate(!update);
  };


  console.log('menu', menu);

  return (
    <React.Fragment>
      {items &&
        items.map((list, listIndex) => {
          return (
            <List
              component="nav"
              key={`list${listIndex}`}
              subheader={
                <ListSubheader component="div">
                  {list.title}
                </ListSubheader>
              }
            >
              {list.items.map((item, itemIndex) => {
                return (
                  <div key={`listItemStart${itemIndex}`}>
                    {item.subitems != null
                      ? <MenuCollapse
                        key={`MenuCollapse${item.id}`}
                        menu={menu}
                        item={item}
                        handleClick={handleClick}
                      />
                      : <MenuNode key={`MenuNode${item.id}`} data={item} link={`/${item.link}`} />}
                  </div>
                );
              })}
              {/* <Divider key={`Divider${listIndex}`} absolute /> */}
            </List>
          );
        })}
    </React.Fragment>
  );
};

export default Index;
