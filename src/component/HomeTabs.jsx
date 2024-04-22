import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Product from './Product';


const HomeTabs = (props) => {

    let { tab, clothes, no } = props;

    return (
        <Container className='home_product_container'>
            <Row className='home_product' >

                {
                    clothes.slice(tab*8, (tab*8)+8).map((clo, i) =>
                        <Product clothes={clo} key={i} i={i} no={no} tab = {tab} />)
                }

            </Row>

        </Container>
    )


}

export default HomeTabs