import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom'; //쿼리붙여서 데이터검색

const ProductAll = () => {
  const [productList, setProductList] =useState([]);
  const [query,setQuery]=useSearchParams()
  
  
  const getProducts = async () => {
      let searchQuery = query.get("q") || "";
      let url = `https://my-json-server.typicode.com/leealswl/hnm-react/products?=${searchQuery}`;
      console.log("fetch URL:", url);
      const res = await fetch(url);
      const data = await res.json();
      console.log("검색 결과:", data);
      setProductList(data);
  };
  
  //유즈이펙트 맨처음에만 호출됨..검색기능 추가하려면 query값을 넣어줘서 다시 확인해야함
    // 검색어 값이 바뀔 때마다 getProducts 호출
    useEffect(() => {
      getProducts();
    }, [query]);

  return (
    <div>
      <Container>
        {productList.length === 0 ? (
          <div className='empty-message'>검색 내용이 없습니다.</div>
        ) : (
          <Row className="justify-content-center">
            {productList.map((menu) => (
              <Col className='product-card' xs={12} lg={3} key={menu.id}>
                <ProductCard item={menu} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductAll