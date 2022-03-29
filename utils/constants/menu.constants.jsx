let menuData = [];
let subitems = [];

menuData.push({
  id: 1,
  title: '',
  items: [
    {
      id: 'articles',
      icon: 'book',
      name: 'Articles',
      link: '/articles'
    }
  ]
});
menuData.push({
  id: 1,
  title: '',
  items: [
    {
      id: 'artist',
      icon: 'person',
      name: 'Artist',
      link: '/articles'
    }
  ]
});

menuData.push({
  id: 1,
  title: '',
  items: [
    {
      id: 'parody',
      icon: 'P',
      name: 'Parody',
      link: '/articles'
    }
  ]
});
menuData.push({
  id: 1,
  title: '',
  items: [
    {
      id: 'character',
      icon: 'mood',
      name: 'Character',
      link: '/articles'
    }
  ]
});
menuData.push({
  id: 1,
  title: '',
  items: [
    {
      id: 'tag',
      icon: 'assignment',
      name: 'Tag',
      link: '/articles'
    }
  ]
});
menuData.push({
  id: 1,
  title: '',
  items: [
    {
      id: 'user',
      icon: 'person',
      name: 'User',
      link: '/articles'
    }
  ]
});
menuData.push({
  id: 1,
  title: '',
  items: [
    {
      id: 'logout',
      icon: 'forward',
      name: 'Logout',
      link: '/articles'
    }
  ]
});

// start location module
// subitems = [];

// subitems.push({
//   id: 'parodies',
//   icon: 'group',
//   name: 'Parodies',
//   link: 'parodies'
// });
// menuData.push({
//   id: 'tagcloud',
//   title: '',
//   items: [
//     {
//       id: 'tagcloud',
//       icon: 'persons',
//       name: 'tag Cloud',
//       link: 'tag_cloud',
//       subitems: subitems
//     }
//   ]
// });
// end user module

const MENU_CONSTANT = {
  MENU_DATA: menuData
};

export default MENU_CONSTANT;
