import React from 'react';
import MenuList from '../menu/MenuList';
import MenuListItem from '../menu/MenuListItem';
import MenuItemNavLink from '../menu/MenuItemNavLink';

const menuItemsHeader = [
  {
    route: '/',
    name: 'Главная',
  },
  {
    route: '/catalog',
    name: 'Каталог',
  },
  {
    route: '/about',
    name: 'О магазине',
  },
  {
    route: '/contacts',
    name: 'Контакты',
  },
];

export default function HeaderMenu() {
  return (
    <MenuList className="navbar-nav mr-auto" items={menuItemsHeader}>
      {(items) =>
        items.map((item, index) => (
          <MenuListItem key={index} className="nav-item">
            <MenuItemNavLink
              className="nav-link"
              route={item.route}
              name={item.name}
            />
          </MenuListItem>
        ))
      }
    </MenuList>
  );
}