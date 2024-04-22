import React from 'react'
import {Col, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Product = (props) => {

  let {title, imgUrl, price} = props.clothes;
  let navigate = useNavigate();
  let { i, no, tab} = props;
    
  return (
   
   
   <>
    <Nav.Link onClick = {()=> navigate('/detail/' + no[i+(tab*8)])}>

        <Col md = {1} style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', width:'40px', height: '40px', backgroundColor: '#ff6200', color:'#eee', fontSize:'25px', padding:'10px 10px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{no[i+1]}</span>
        <img src ={imgUrl} width="80%" alt = "item" />
        <h4>{title}</h4>
        <p>{price.toLocaleString()}</p>   
          <div className='color-squares'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
   
          </div>
        
        
        </Col>

    </Nav.Link>


   </>


  )
}


export default Product