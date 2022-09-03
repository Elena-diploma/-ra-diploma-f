import React from 'react';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../img/header-logo.png';
import HeaderMenu from './HeaderMenu';
import PageHeaderWidget from './PageHeaderWidget';

export default function PageHeader() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink to="/" className="navbar-brand">
              <img src={headerLogo} alt="Bosa Noga"></img>
            </NavLink>
            <div className="collapase navbar-collapse" id="navbarMain">
              <HeaderMenu />
              <PageHeaderWidget />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}