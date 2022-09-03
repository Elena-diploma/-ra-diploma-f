import React from 'react';

export default function CartInfo({
  form,
  handleFormChange,
  handleOrderSubmit,
  handleCheckboxChange,
  submitOrderDisable,
}) {
  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card">
        <form className="card-body" onSubmit={handleOrderSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              className="form-control"
              id="phone"
              placeholder="Ваш телефон, например +7..."
              required
              onChange={handleFormChange}
              value={form.phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input
              className="form-control"
              id="address"
              placeholder="Адрес доставки"
              required
              onChange={handleFormChange}
              value={form.address}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами доставки
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-outline-secondary"
            disabled={submitOrderDisable}
          >
            Оформить
          </button>
        </form>
      </div>
    </section>
  );
}