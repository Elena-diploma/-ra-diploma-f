import React from 'react';
import { useMatch } from 'react-router-dom';

export default function CatalogMenuItemLink({
  hrefAttr,
  className,
  name,
  categoryId,
  onSelect,
}) {
  const mainPage = useMatch('/');
  const catalogPage = useMatch('/catalog');
  const hrefAttrValue = `${hrefAttr}${
    mainPage?.pathname || catalogPage?.pathname
  }`;
  return (
    <a
      href={hrefAttrValue}
      className={className}
      onClick={() => onSelect(categoryId)}
    >
      {name}
    </a>
  );
}