import React from 'react';
import MenuList from '../../menu/MenuList';
import MenuListItem from '../../menu/MenuListItem';
import CatalogMenuItemLink from './CatalogMenuItemLink';

export default function CatalogMenu({ menuItems, categoryId, handleSelect }) {
  const hrefAttr = '#';
  return (
    <MenuList
      className="catalog-categories nav justify-content-center"
      items={menuItems}
    >
      {(items) =>
        items.map((item) => (
          <MenuListItem key={item.id} className="nav-item">
            <CatalogMenuItemLink
              className={
                categoryId === item.id ? 'nav-link active' : 'nav-link'
              }
              hrefAttr={hrefAttr}
              name={item.title}
              categoryId={item.id}
              onSelect={handleSelect}
            ></CatalogMenuItemLink>
          </MenuListItem>
        ))
      }
    </MenuList>
  );
}