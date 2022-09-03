import React from 'react';

export default function PageMain(props) {
  return (
    <main className="container">
    <div className="row">
      <div className="col">
       {props.children}
      </div>
    </div>
  </main>
  );
}