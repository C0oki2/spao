import React from 'react'
import {Col, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Product2 = (props) => {

  let {title, imgUrl, price} = props.clothes;
  let navigate = useNavigate();
  let { i, no} = props;
    
  return (
   
   
   <>
    <Nav.Link onClick = {()=> navigate('/detail/' + no[32+i])}>

        <Col md = {1} display = "flex">
        <img src ={imgUrl} width="300px" alt = "item" />
        <h4 width = "310px">{title}</h4>
        <p>{price}</p>       
        </Col>

    </Nav.Link>


   </>


  )
}


export default Product2