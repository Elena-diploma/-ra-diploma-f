import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HeaderSearch from './HeaderSearch';
import HeaderCart from './HeaderCart';
import { catalogSearchChange } from '../../store/SliceCatalog';

export default function PageHeaderWidget() {
  const [invisible, setInvisible] = useState(true);
  const [form, setForm] = useState({ search: '' });
  const { counter } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleInvisible = () => {
    setInvisible((prev) => !prev);
    const search = form.search.trim();
    if (search) {
      dispatch(catalogSearchChange(search));
      setForm({ search: '' });
      navigate('/catalog');
    }
  };

  const handleNavigateCart = () => {
    navigate('/cart');
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log({ name, value });
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div>
      <div className="header-controls-pics">
        <div
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
          onClick={toggleInvisible}
        ></div>
        <HeaderCart counter={counter} handleNavigateCart={handleNavigateCart} />
        <HeaderSearch
          invisible={invisible}
          form={form}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}