import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetProduct } from '../../../api/api';
import Loader from '../Loader';

export default function Product({ setCart }) {
  const { product, loading, error } = useSelector(
    (state) => state.product
  );
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetProduct(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    error && navigate('/404');
  }, [navigate, error]);

  const handleSelectSize = (size) => {
    setSelectedSize((prev) => (size === prev ? '' : size));
  };

  const handleDecQty = () => {
    setQuantity((prev) => (prev === 1 ? prev : (prev -= 1)));
  };

  const handleIncQty = () => {
    setQuantity((prev) => (prev === 10 ? prev : (prev += 1)));
  };

  const handleNavigateCart = () => {
    const item = {
      id: product.id,
      title: product.title,
      size: selectedSize,
      count: quantity,
      price: product.price,
    };
    setCart((prevCart) => {
      if (!prevCart?.length) return [item];
      if (
        prevCart.findIndex(
          (el) => el.id === item.id && el.size === item.size
        ) !== -1
      )
        return prevCart
          .slice()
          .map((el) =>
            el.id === item.id ? { ...el, count: el.count + item.count } : el
          );

      return [...prevCart, item];
    });
    navigate('/cart');
  };

  const {
    title,
    images,
    sku,
    manufacturer,
    color,
    material,
    season,
    reason,
    sizes,
  } = product;

  const imgSrcAttr = images?.[0];

  const sizesElement = sizes?.map(
    ({ size, avalible }) =>
      avalible && (
        <span
          key={size}
          className={
            selectedSize === size
              ? 'catalog-item-size selected'
              : 'catalog-item-size'
          }
          onClick={() => handleSelectSize(size)}
        >
          {size}
        </span>
      )
  );

  return loading ? (
    <Loader />
  ) : (
    <section className="catalog-item">
      <h2 className="text-center">{title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={imgSrcAttr} className="img-fluid" alt="" />
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>
              Размеры в наличии:
              {sizesElement}
            </p>
            {selectedSize && (
              <p>
                Количество:
                <span className="btn-group btn-group-sm pl-2">
                  <button
                    className="btn btn-secondary"
                    onClick={handleDecQty}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="btn btn-outline-primary">{quantity}</span>
                  <button
                    className="btn btn-secondary"
                    onClick={handleIncQty}
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </span>
              </p>
            )}
          </div>
          {selectedSize && (
            <button
              className="btn btn-danger btn-block btn-lg"
              onClick={handleNavigateCart}
            >
              В корзину
            </button>
          )}
        </div>
      </div>
    </section>
  );
}