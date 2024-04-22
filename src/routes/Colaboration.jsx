import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row} from 'react-bootstrap'
import colabodata from '../colabodata';

const PageContent = ({ pageNumber } ) => {

  const itemsPerPage = 4; 
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = colabodata.slice(startIndex, endIndex);



  return (
    <Container className='colabox'>
      <Row className='colabo_title'>
        <h1>LAUNCHING CALENDAR</h1>
      </Row>
      <Row>
        {pageData.map(item => (
          <Col key={item.id}  lg={6}>
            <div>
              <img src={item.imgUrl} alt={item.title} style={{ maxWidth: '100%' }} />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p>{item.price}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const Colaboration = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; 

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
<Col md={6} lg={12} xl={12} className='pagination_colaboration'>
  {/* 페이지 내용 */}
  <div className="page-content-container">
    <PageContent pageNumber={currentPage} />
  </div>

  {/* Pagination */}

  
  {/* Pagination */}
  <Row>
    <Pagination className="pagination justify-content-center" size="md">
      <Pagination.First onClick={() => handlePaginationClick(1)} />
      <Pagination.Prev onClick={() => handlePaginationClick(currentPage - 1)} disabled={currentPage === 1} />
      {Array.from({ length: totalPages }, (_, i) => (
        <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => handlePaginationClick(i + 1)}>
          {i + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => handlePaginationClick(currentPage + 1)} disabled={currentPage === totalPages} />
      <Pagination.Last onClick={() => handlePaginationClick(totalPages)} />
    </Pagination>
  </Row>
</Col>

  )
}

export default Colaboration;
