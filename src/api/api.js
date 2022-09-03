import {
  fetchPostCartRequest,
  fetchPostCartSuccess,
  fetchPostCartFailed,
} from '../store/SliceCart';
import {
  fetchCatalogRequest,
  fetchCatalogCategoriesSuccess,
  fetchCatalogContentSuccess,
  fetchCatalogFailed,
} from '../store/SliceCatalog';
import {
  fetchGetProductRequest,
  fetchGetProductSuccess,
  fetchGetProductFailed,
} from '../store/SliceProduct';
import {
  fetchTopSalesRequest,
  fetchTopSalesSuccess,
  fetchTopSalesFailed,
} from '../store/SliceTopSales';

const url = process.env.REACT_APP_API_URL_BUILD;

export const fetchGetTopSales = () => (dispatch) => {
  dispatch(fetchTopSalesRequest());
  return fetch(`${url}/top-sales`)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Произошла ошибка.');
      }
      return response.json();
    })
    .then((result) => {
      dispatch(fetchTopSalesSuccess(result));
    })
    .catch((e) => {
      dispatch(fetchTopSalesFailed(e.message));
    });
};

export const fetchGetCatalogCategories = () => (dispatch) => {
  dispatch(fetchCatalogRequest());
  return fetch(`${url}/categories`)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Произошла ошибка.');
      }
      return response.json();
    })
    .then((result) => {
      dispatch(fetchCatalogCategoriesSuccess(result));
    })
    .catch((e) => {
      dispatch(fetchCatalogFailed(e.message));
    });
};

export const fetchGetCatalogContent = (categoryId, q, offset) => (dispatch) => {
  dispatch(fetchCatalogRequest());
  const apiUrl = `${url}/items`;
  const querry = new URLSearchParams({
    categoryId,
    q,
    offset,
  });
  const fetchUrl =
    ((categoryId || q || offset) && `${apiUrl}?${querry}`) || apiUrl;
  return fetch(fetchUrl)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Произошла ошибка.');
      }
      return response.json();
    })
    .then((result) => {
      dispatch(fetchCatalogContentSuccess(result));
    })
    .catch((e) => {
      dispatch(fetchCatalogFailed(e.message));
    });
};

export const fetchGetProduct = (id) => (dispatch) => {
  dispatch(fetchGetProductRequest());
  const apiUrl = `${url}/items`;
  const fetchUrl = `${apiUrl}/${id}`;
  return fetch(fetchUrl)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Произошла ошибка.');
      }
      return response.json();
    })
    .then((result) => {
      dispatch(fetchGetProductSuccess(result));
    })
    .catch((e) => {
      dispatch(fetchGetProductFailed(e.message));
    });
};

export const fetchPostOrder = (setCart, setOwner) => (dispatch, getState) => {
  const {
    cart: { items, owner },
  } = getState();
  dispatch(fetchPostCartRequest());
  return fetch(`${url}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ owner, items }),
  })
    .then((result) => {
      if (result.status < 200 || result.status >= 300) {
        throw new Error(`Произошла ошибка: ${result.statusText}`);
      }
      dispatch(fetchPostCartSuccess(true));
      setCart(null);
      setOwner(null);
    })
    .catch((e) => {
      dispatch(fetchPostCartFailed(e.message));
    });
};
