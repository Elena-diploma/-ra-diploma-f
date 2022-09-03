import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Catalog from './components/pages/Catalog/Catalog';
import Main from './components/pages/Main/Main';
import NotFound from './components/pages/NotFound/NotFound';
import About from './components/pages/About/About';
import Contacts from './components/pages/Contacts/Contacts';
import Cart from './components/pages/Cart/Cart';
import PageHeader from './components/header/PageHeader';
import PageMain from './components/main/PageMain';
import PageFooter from './components/footer/PageFooter';
import Banner from './components/pages/Banner';
import Product from './components/pages/Product/Product';
import useStorage from './hooks/useStorage';
import { setCartItems, setCartOwner } from './store/SliceCart';

export default function App() {
  const [cart, setCart] = useStorage(localStorage, 'cart', true);
  const [owner, setOwner] = useStorage(localStorage, 'owner', true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCartItems(cart));
    dispatch(setCartOwner(owner));
  }, [dispatch, cart, owner]);

  return (
    <Router>
      <PageHeader />
      <PageMain>
        <Banner />
        <Routes>
          <Route
            path="/cart"
            element={<Cart setCart={setCart} setOwner={setOwner} />}
          />
          <Route path="/catalog/:id" element={<Product setCart={setCart} />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/ra-diplom" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageMain>
      <PageFooter />
    </Router>
  );
}