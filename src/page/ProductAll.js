import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom'; //쿼리붙여서 데이터검색

const ProductAll = () => {
  const [productList, setProductList] =useState([]);
  const [query, setQuery]=useSearchParams()
  
  
  const getProducts = async() =>{

    let searchQuery = query.get('q') || '';
    console.log("쿼리값?",searchQuery)

    let url=`http://localhost:4000/products?q=${searchQuery}`
    // console.log("쿼리url",url)
    let res = await fetch(url)
    let data =await res.json()
    console.log("검색어 데이터시바라라라랄",data)
    setProductList(data)
  }
  //유즈이펙트 맨처음에만 호출됨..검색기능 추가하려면 query값을 넣어줘서 다시 확인해야함
  useEffect(()=>{
    getProducts()
  },[query])

  return (
    <div>
      <Container>
      <Row>
        {productList.map((menu)=>
        <Col lg={3} key={menu.id}><ProductCard item={menu}/></Col>)
        }
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll