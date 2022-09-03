import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuItemLink(props) {
  const { route, className, name } = props;
  return (
    <Link to={route} className={className}>
      {name}
    </Link>
  );
}