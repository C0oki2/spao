import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

const Detail2 = ( props) => {

    let { bestdata, no, i } = props;
    let {id} = useParams(i);

  return (
    <Container>
            <Row>
                <Col md={6}>
                    <img src = {bestdata[id].imgUrl} width="100%"/>

                </Col>

                <Col>
                    <h4 className='pt-5'>{bestdata[id].title}</h4>
                    <p>{bestdata[id].content}</p>
                    <p>{bestdata[id].price}</p>
                    <Button variant='danger'>주문하기</Button>
                </Col>

            </Row>


        </Container>
  )
}

export default Detail2