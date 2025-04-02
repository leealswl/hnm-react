import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom'; //쿼리붙여서 데이터검색

const ProductAll = () => {
  const [productList, setProductList] =useState([]);
  const [query]=useSearchParams()
  const searchQuery = query.get("q") || "";
  
  const getProducts = async () => {
    try {
      // 전체 검색: q=를 사용하여 모든 필드를 대상으로 검색
      let url = `http://localhost:4000/products/?q=${encodeURIComponent(searchQuery)}`;
      console.log("fetch URL:", url);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("검색 결과:", data);
      setProductList(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  
  //유즈이펙트 맨처음에만 호출됨..검색기능 추가하려면 query값을 넣어줘서 다시 확인해야함
    // 검색어 값이 바뀔 때마다 getProducts 호출
    useEffect(() => {
      console.log("useEffect triggered with searchQuery:", searchQuery);
      getProducts();
    }, [searchQuery]);

  return (
    <div>
      <Container>
      <Row>
        {productList.map((menu)=>
        <Col lg={3} key={menu.id}>
          <ProductCard item={menu}/>
        </Col>)
        }
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll