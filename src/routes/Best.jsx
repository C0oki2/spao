import React, {useState} from 'react'
import Title from '../component/Title'
import { Container, Row, Button,Form, InputGroup} from 'react-bootstrap'
import Product3 from '../component/Product3'
import Accordion from 'react-bootstrap/Accordion';

// import { useSelector, useDispatch} from 'react-redux';
// import { mysearch } from "../store.js";

const Best = (props) => {

  let { bestdata, no, setBestdata, setNo } = props;

  // let bestbutton = useSelector( state => state.cart)
  // let dispatch = useDispatch() 

    // 검색어 상태 변수
    const [searchValue, setSearchValue] = useState('');

    // 검색어 변경 핸들러
    const handleSearchChange = (event) => {
      const value = event.target.value.toLowerCase(); // 입력 필드의 값 소문자로 변환
      setSearchValue(value);
    };


    const filteredData = bestdata.filter(best => {
      return best.title.toLowerCase().includes(searchValue); // 제목을 기준으로 필터링
    });



{/* 가격에 따라 버튼 선택하는  */}

const priceRanges = [

  {min: 1000, max : 30000},
  {min : 30001, max : 60000},
  {min : 60001, max : 90000},
  {min : 90001, max : 150000}

];



  return (
    <div style={{display:'flex'}}>

      <div className='woman_left_menubar' style={{position:'sticky',top:'100px'}}>


        <br></br>
        <h3 style={{paddingLeft:'10px'}}>Filter</h3>
        <br></br>

        <InputGroup className="mb-3">
                <Form.Control
                  placeholder="찾으시는 상품을 입력하세요."
                  aria-label="찾으시는 상품을 입력하세요."
                  aria-describedby="basic-addon2"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>


        <br></br>
        
        <Button variant='outline-primary' onClick={() => {
            let copy = [...bestdata].sort((a, b) => (a.title > b.title) ? 1 : -1)

            setBestdata(copy);

            let no_copy = [];
            for (let i in copy) {
              no_copy.push(copy[i].id);
            }

            setNo(no_copy);
          }}


          >이름순 정렬</Button>{' '}

          <br></br>
          <br></br>

          <Button variant='outline-secondary' onClick={() => {

            let copy = [...bestdata].sort((a, b) => (a.price > b.price) ? 1 : -1)

            setBestdata(copy);

            let no_copy = [];
            for (let i in copy) {
              no_copy.push(copy[i].id);
            }

            setNo(no_copy);


          }}>낮은가격순 정렬</Button>{' '}

          <br></br>
          <br></br>

          <Button variant='outline-success'
            onClick={() => {

              let copy = [...bestdata].sort((a, b) => (a.price < b.price) ? 1 : -1)

              setBestdata(copy);

              let no_copy = [];
              for (let i in copy) {
                no_copy.push(copy[i].id);
              }

              setNo(no_copy);


            }}


          >높은가격순 정렬</Button>



      </div>

      <div className='best_content' >
  {/* 상품 리스트 */}
  <Title />
  <div style={{ height: '100px' }}></div>
  <div className='best_list' >
    <Row>
      {filteredData.map((best, i) => (
        <Product3 bestdata={best} key={i} i={i} no={no} />
      ))}
    </Row>
  </div>
  
</div>



    </div>


  );

// 각 버튼이 클릭되었을 때 실행될 함수를 정의합니다.
function handleClick(range) {
  // 가격 범위에 따라 필터링된 데이터를 생성합니다.
  const filteredByPrice = bestdata.filter(item => item.price >= range.min && item.price <= range.max);
  // 필터링된 데이터를 상태에 업데이트합니다.
  setBestdata(filteredByPrice);
  // 필터링된 데이터의 ID를 상태로 설정합니다.
  setNo(filteredByPrice.map(item => item.id));
}
}






export default Best;