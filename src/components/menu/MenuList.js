import React from 'react';

export default function MenuList({ className, items, ...props }) {
  return <ul className={className}>{props.children(items)}</ul>;
}