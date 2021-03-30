import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import api from '../../Utils/api';

import Cart from '../../components/Cart';
import Header from '../../components/Header';
import HeaderSearch from '../../components/HeaderSearch';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

import { Container, PageBody } from '../../AppStyled.js/styled';

import {
  ContainerArea,
  CategoryArea,
  CategoryList,
  ProductArea,
  ProductList,
  ProductPaginationArea,
  ProductPaginationItem,
} from './styled';

const Home = () => {
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  const [activePage, setActivePage] = useState(1);
  const [activeCategory, setAtctiveCategory] = useState(0);

  const getProducts = async () => {
    let fields = {};

    if (activeCategory !== 0) {
      fields.category = activeCategory;
    }
    if (activePage > 0) {
      fields.page = activePage;
    }

    let queryString = new URLSearchParams(fields).toString();

    api.get('/products?' + queryString).then((response) => {
      setProducts(response.data.result.data);
      setTotalPages(response.data.result.pages);
      setActivePage(response.data.result.pages);
    });
  };

  useEffect(() => {
    const getCategories = async () => {
      const cat = api.get('/categories').then((response) => {
        setCategories(response.data.categoryList.result);
      });
      ReactTooltip.rebuild();

      if (cat.error === '') {
        setCategories(cat.result);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    setProducts([]);
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, activePage]);

  const handleProductClick = (data) => {
    setModalData(data);
    setModalStatus(true);
  };

  let productList = products;

  if (headerSearch && productList.length) {
    const regex = new RegExp(headerSearch, 'gi');
    productList = productList.filter((product) => regex.test(product.name));
  }

  return (
    <Container>
      <Header />
      <PageBody>
        <ContainerArea>
          <HeaderSearch headerSearch={headerSearch} setHeaderSearch={setHeaderSearch} />

          {categories.length > 0 && (
            <CategoryArea>
              Selecione uma categoria
              <CategoryList>
                {categories.map((item, index) => (
                  <CategoryItem
                    key={index}
                    data={item}
                    activeCategory={activeCategory}
                    setAtctiveCategory={setAtctiveCategory}
                  />
                ))}
              </CategoryList>
            </CategoryArea>
          )}
          {productList.length > 0 && (
            <ProductArea>
              <ProductList>
                {productList.map((item, index) => {
                  return <ProductItem key={index} data={item} onClick={handleProductClick} />;
                })}
              </ProductList>
            </ProductArea>
          )}

          {totalPages > 0 && (
            <ProductPaginationArea>
              {Array(totalPages)
                .fill(0)
                .map((item, index) => (
                  <ProductPaginationItem
                    key={index}
                    active={activePage}
                    current={index + 1}
                    onClick={() => setActivePage(index + 1)}
                  >
                    {index + 1}
                  </ProductPaginationItem>
                ))}
            </ProductPaginationArea>
          )}

          <Modal modalStatus={modalStatus} setModalStatus={setModalStatus}>
            <ModalProduct data={modalData} setModalStatus={setModalStatus} />
          </Modal>
        </ContainerArea>
      </PageBody>
      <Cart />
    </Container>
  );
};

export default Home;
