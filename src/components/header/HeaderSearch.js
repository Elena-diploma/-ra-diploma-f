import React, { useEffect, useRef } from 'react';

export default function HeaderSearch({ invisible, form, handleChange }) {
  const inputRef = useRef();

  useEffect(() => {
    if (!invisible) inputRef.current?.focus();
  }, [invisible]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const baseClassName = 'header-controls-search-form form-inline';
  return (
    <form
      // data-id="search-form"
      className={invisible ? baseClassName + ' invisible' : baseClassName}
      onSubmit={handleSubmit}
    >
      <input
        name="search"
        className="form-control"
        placeholder="Поиск"
        value={form.search}
        onChange={handleChange}
        ref={inputRef}
      ></input>
    </form>
  );
}