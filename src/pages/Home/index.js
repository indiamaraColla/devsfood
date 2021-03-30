import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import api from '../../Utils/api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

import {
  Container,
  CategoryArea,
  CategoryList,
  ProductArea,
  ProductList,
  ProductPaginationArea,
  ProductPaginationItem,
} from './styled';

let searchTimer = null;

const Home = () => {
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  const [activePage, setActivePage] = useState(1);
  const [activeCategory, setAtctiveCategory] = useState(0);
  const [activeSearch, setActiveSearch] = useState('');

  const getProducts = async () => {
    let fields = {};

    if (activeCategory !== 0) {
      fields.category = activeCategory;
    }
    if (activePage > 0) {
      fields.page = activePage;
    }
    if (activeSearch !== '') {
      fields.search = activeSearch;
    }

    let queryString = new URLSearchParams(fields).toString();

    api.post('/products?' + queryString).then((response) => {
      setProducts(response.data.result.data);
      setTotalPages(response.data.result.pages);
      setActivePage(response.data.result.pages);

      // ver tbm pq nao ta puxando a url certa igual no network
      // fazer o search funcionar
      // let fields = response.data.result.data.filter((item) => item.name);
      // console.log('$$$$$$$teste', fields);
    });
  };

  useEffect(() => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch);
    }, 2000);
  }, [headerSearch]);

  useEffect(() => {
    const getCategories = async () => {
      const cat = api.post('/categories').then((response) => {
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
  }, [activeCategory, activePage, activeSearch]);

  const handleProductClick = (data) => {
    setModalData(data);
    setModalStatus(true);
  };

  return (
    <Container>
      <Header headerSearch={headerSearch} setHeaderSearch={setHeaderSearch} />

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
      {products.length > 0 && (
        <ProductArea>
          <ProductList>
            {products.map((item, index) => {
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
    </Container>
  );
};

export default Home;
