import React from 'react'
import {Col, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product3 = (props) => {


    let {title, imgUrl, price} = props.bestdata;
    let navigate = useNavigate();
    let { i, no } = props;
      

    

    return (
        <>

            <Col sm ={6} lg={3}>
                <Nav.Link onClick={() => navigate()}>
                    <img src={imgUrl} width="80%" alt="item" />
                    <h4>{title}</h4>
                    <p>{price.toLocaleString()}</p>

                    <div className='color-squares'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>
                </Nav.Link>
            </Col>

        </>
    )
}

export default Product3