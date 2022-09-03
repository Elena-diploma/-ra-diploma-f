import React from 'react';

export default function MenuListItem(props) {
  return <li className={props.className}>{props.children}</li>;
}