import { useState, useEffect } from 'react'
import React from 'react'
import { Button, Col, Container, Row, Alert, Nav} from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom';
import { addItem, addCount } from '../store';
import { useDispatch } from 'react-redux';
// import data_best from '../data_best';
// import data from '../data';



const Detail = (props) => {

    let {clothes, tab, idx} = props;
    let {id} = useParams(tab*8+idx);

    const [setTab] = useState(0)

    let [alert, setAlert] = useState(true);


    useEffect(() => {


        const timeout = setTimeout(() => {
            setAlert(false);
        }, 2000);

        // const handleScroll = () => {
        //     const scrollPosition = window.scrollY;
        //     const box2Element = document.querySelector('.box2'); // box1 요소 선택
    
        //     if (scrollPosition >= 5500) {
        //         // 스크롤 위치가 5500px 이상일 때
        //         box2Element.style.position = 'relative'; // box1의 position을 relative로 변경하여 고정 해제
        //     } else {
        //         // 스크롤 위치가 5500px 미만일 때
        //         box2Element.style.position = 'fixed';
        //         box2Element.style.marginTop = '-10px'; // box1의 position을 fixed로 변경하여 고정
        //     }
        // };
    
        // window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        // return () => {
        //     window.removeEventListener('scroll', handleScroll);

        //     return () => clearTimeout(timeout);
        // };
    }, []);
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let selproduct = clothes.find( x => x.id == id )

    const moveCart = ()=>{ 

        dispatch(addCount({
        id: selproduct.id,
        imgUrl: selproduct.imgUrl,
        imgUrl2: selproduct.imgUrl2,
        imgUrl3: selproduct.imgUrl3,
        imgUrl4: selproduct.imgUrl4,
        imgUrl5: selproduct.imgUrl5,

        item:selproduct.title,
        price: selproduct.price,
        amount: 1}));
    
        navigate('/cart');
    
      }

    
    return (
        <Container style={ {marginTop:'100px'}}>

            {/*경고 창*/}
             {
                
                alert === true?

                <Alert variant = 'warning'>
                    지금 구매 시  새벽배송
                </Alert>

                :null

            } 

            <div style={{display:'flex'}}>

            <div className='box1' style={{width:'800px', height:'auto'}}>
      

                <img src={process.env.PUBLIC_URL + selproduct.imgUrl} width="50%" alt="1" />
                <img src={process.env.PUBLIC_URL + selproduct.imgUrl2} width="50%" alt="2" />
                <img src={process.env.PUBLIC_URL + selproduct.imgUrl3} width="50%" alt="3" />
                <img src={process.env.PUBLIC_URL + selproduct.imgUrl4} width="50%" alt="4" />
                <img src={process.env.PUBLIC_URL + selproduct.imgUrl5} width="60%" alt="5" />


            </div>


            <div className='box2' style={{width:'490px', height:'100vh', paddingTop:'100px', zIndex: 1, top:'0', paddingLeft:'100px', position:'sticky'}}>

                    <br></br>
    

                
                <h4 className='pt-5'>{selproduct.title}</h4>
                <p>{selproduct.content}</p>
                <span style={{backgroundColor:'red', color:'white'}}>무료반품</span> <span style={{background:'black', color:'white'}}>신상품</span>

                <p style={{ fontSize: '30px', fontWeight: 'bold', marginTop: '10px' }}>{selproduct.price.toLocaleString()}원</p>

                <br></br>
                <hr></hr>
                <p>신규가입 혜택</p> 
                <hr></hr>
                <p>사이즈 정보 * 상품 정보 제공 공시</p> 
                <hr></hr>
                <p>배송 안내 </p> 
                <hr></hr>

                <br></br>
                
                <button style={{padding:'15px 70px', marginLeft:'40px', backgroundColor:'#fff', border:'1px solid #878787', width:'400px' }}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" class="svg-inline fit-widget-icon-bottom">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.875 4.375C1.59886 4.375 1.375 4.59886 1.375 4.875V8.375V31.125C1.375 31.4011 1.59886 31.625 1.875 31.625H8.875C9.12104 31.625 9.33051 31.446 9.36888 31.203L11.5 17.7059L13.6311 31.203C13.6695 31.446 13.879 31.625 14.125 31.625H21.125C21.4011 31.625 21.625 31.4011 21.625 31.125V8.375V4.875C21.625 4.59886 21.4011 4.375 21.125 4.375H1.875ZM2.375 7V5.375H20.625V7H2.375ZM2.375 8V8.375V30.625H8.44775L11.0061 14.422C11.0445 14.179 11.254 14 11.5 14C11.746 14 11.9555 14.179 11.9939 14.422L14.5522 30.625H20.625V8.375V8H2.375Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 4.375L30.3 4.6L34.3 7.6L33.7 8.4L30.5 6V30L33.7 27.6L34.3 28.4L30.3 31.4L30 31.625L29.7 31.4L25.7 28.4L26.3 27.6L29.5 30V6L26.3 8.4L25.7 7.6L29.7 4.6L30 4.375Z"></path>
                    </svg>

                    고객님 사이즈를 찾아 보세요!</button>

                <br></br>
                <br></br>

                <button style={{padding:'15px 70px', marginLeft:'40px', backgroundColor:'black',color:'#fff', border:'1px solid #878787', width:'400px'}}>오프라인 매장 조회</button>

                <br></br>
                <br></br>

                <button style={{padding:'15px 70px', marginLeft:'40px', backgroundColor:'#fff',color:'black', border:'1px solid #878787', width:'400px'}} onClick={moveCart}>장바구니</button>
             
            </div>


            </div>


</Container>


  )
}

export default Detail