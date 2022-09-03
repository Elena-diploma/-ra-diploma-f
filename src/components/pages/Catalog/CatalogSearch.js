import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function CatalogSearch({ handleSearch }) {
  const [form, setForm] = useState({ search: '' });
  const {
    search,
  } = useSelector((state) => state.catalog);

  useEffect(() => {
    setForm((prevForm) => ({ ...prevForm, search }));
  }, [search]);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, search: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch(form.search.trim());
  };
  console.log('SearchCatalog_form: ', form);
  return (
    <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
      <input
        className="form-control"
        placeholder="Поиск"
        value={form.search}
        onChange={handleChange}
      />
    </form>
  );
}