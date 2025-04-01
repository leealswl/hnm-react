import React from 'react'
import {useNavigate } from 'react-router-dom'

const Productcard = ({item}) => {
    const navigate = useNavigate()
    const showDetail=()=>{
        navigate (`/product/${item.id}` )
        
    }
  return (
    <div className='product-card' onClick={showDetail}>
        <img src={item?.img}/>
        <div>{item?.choice ===true?"Conscious Choice":""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}원</div>
        <div>{item?.new ===true? "신제품":""}</div>
    </div>
  )
}

export default Productcard