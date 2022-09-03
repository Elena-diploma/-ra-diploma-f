import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuItemNavLink(props) {
  const { route, className, name } = props;
  return (
    <NavLink to={route} className={className}>
      {name}
    </NavLink>
  );
}