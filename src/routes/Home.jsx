import React, {useState} from 'react'
import { Container,Nav, Row, Tabs, Tab } from 'react-bootstrap';
import Product from '../component/Product';


import '../App.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import data from './data.js';
import { Autoplay, Pagination, Navigation} from 'swiper/modules';
import { Outlet, useNavigate } from 'react-router-dom';
import HomeTabs from '../component/HomeTabs';
import Home_Swiper2 from '../component/Home_Swiper2';





const Home = (props) => {
    let {clothes, no } = props;
    let navigate = useNavigate();
    let [tab, setTab] = useState(0);
 
    return (

        <>


      {/* 홈 슬라이더 1 */}
      <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination ]}
        className="home_swiper1"
      >
        <SwiperSlide><img src = "/img/slider1.jpg"/></SwiperSlide>
        <SwiperSlide><img src = "/img/slider2.jpg"/></SwiperSlide>
        <SwiperSlide><img src = "/img/slider3.jpg"/></SwiperSlide>
        <SwiperSlide><img src = "/img/slider4.jpg"/></SwiperSlide>
        <SwiperSlide><img src = "/img/slider5.jpg"/></SwiperSlide>
        <SwiperSlide><img src = "/img/slider6.jpg"/></SwiperSlide>
        <SwiperSlide><img src = "/img/slider7.jpg"/></SwiperSlide>
        <SwiperSlide><img src = "/img/slider8.jpg"/></SwiperSlide>
      </Swiper>
      </>

      
      
      {/*이순신 내비게이션*/}
      <div id = "weekly_best">
      <h1>위클리 베스트</h1>

    <Nav variant="pills" defaultActiveKey="/home" className='weeklybest'>
      <Nav.Item >
        <Nav.Link onClick={()=>{ setTab(0)}} eventKey="link-0">우먼</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{ setTab(1)}}  eventKey="link-1">맨</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  onClick={()=>{ setTab(2)}}  eventKey="link-2">
         키즈
       </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{ setTab(3)}} eventKey="link-3">
         파자마
       </Nav.Link>
      </Nav.Item>
    </Nav>  
      </div>


    


<HomeTabs tab = {tab} clothes = {clothes} no = {no}/>





     {/*신상품 타이틀*/}

     <div className='title'>
                <h2>신상품</h2>
     </div>


     {/* 홈 슬라이더 2 */}

      <Home_Swiper2  tab = {tab} clothes = {clothes} no = {no}></Home_Swiper2>

          {/*설명 광고 두 개 */}
        <div className='two_add'>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <img src="/img/people1.jpg" style={{ width: '50%' }} ></img>
            <img src="/img/people2.jpg" style={{ width: '50%' }} ></img>
          </div>

</div>



</>

  )
}

export default Home