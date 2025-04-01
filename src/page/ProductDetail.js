import React,{useEffect, useState } from 'react'
import { Container,Row,Col,Dropdown,Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id}=useParams() //밑에 동적값 useparam사용
  const[product,setProduct]=useState (null)
  const [selectedSize, setSelectedSize] = useState('사이즈 선택')

  const getProductDetail=async()=>{
    let url=`http://localhost:4000/products/${id}`
    let res=await fetch(url)
    let data=await res.json()
    console.log("디테일데이터",data)
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail() 
  },[])
  return (
    <div>
      <Container className="p-3">
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col className="p-3">
          <div><h1>{product?.title}</h1></div>
          <div><h2>₩ {product?.price}원</h2></div>
          <div><h3>{product?.choice ===true?"Conscious Choice":""}</h3></div>
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic" className="size-border">
                {selectedSize}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSelectedSize('S')}>S</Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedSize('M')}>M</Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedSize('L')}>L</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="dark"  className="w-100 mt-3">추가</Button>
        </Col>
      
      </Row>
      
      </Container></div>
  )
}

export default ProductDetail