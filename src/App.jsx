import './App.scss';
import { Container, Navbar, Nav} from  'react-bootstrap';
import React, { useState } from 'react';
// Import Swiper React components
import data from './data.js';
import { Routes, Route, useNavigate } from 'react-router-dom'
import data_best from './data_best.js'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.scss';

// import required modules
import Home from './routes/Home.jsx';
import Detail from './routes/Detail.jsx';
import Best from './routes/Best.jsx';
import Detail2 from './component/Detail2.jsx';
import Community from './routes/Community.jsx';
import Colaboration from './routes/Colaboration.jsx';
import colabodata from './colabodata.js';
import Login from './routes/Login.jsx';

import { NavLink } from 'react-router-dom';
import Footer from './component/Footer.jsx';
import data_woman from './data_woman.js';
import { useSelector } from 'react-redux'
import Cart from './routes/Cart.jsx';


function App() {

 
  let [clothes ] = useState(data);
  let navigate = useNavigate();
  let [no, setNo] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]);
  let [tab, setTab] = useState(0);
  // let [tab, setTab] = useState(0)
  let [bestdata, setBestdata] = useState(data_best);
  // let [colabodata, setColabodata] = useState(colabodata);
  let [womandata, setWomandata] = useState(data_woman);
  
  


  let user = useSelector((state) => {return state.user})
  console.log(user);
  

  return (

    <div className="App">


      {/* 내비게이션 */}
      <Navbar bg="light" data-bs-theme="light" className='navbar' style={{ position: 'fixed', width:'100vw'}}>
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/')}}
          >SPAO</Navbar.Brand>

          <Nav className="me-auto">
         
            <Nav.Link onClick={()=>{ navigate('/best')}}>베스트</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/best')}}>우먼</Nav.Link>
            <Nav.Link  onClick={()=>{ navigate('/colaboration')}}>콜라보</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/community')}}>커뮤니티</Nav.Link>

        
            <Nav className="ml-auto">
              <NavLink to="/login" className="nav-link"><img src = "/img/top_mypage.png" alt = "..."/></NavLink>
              <NavLink to="/cart" className="nav-link"><img src = "/img/top_cart_pc.png" alt = "..."/></NavLink>
            </Nav>

          </Nav>
        </Container>
      </Navbar>

      <Routes>

        <Route path="/" element={<Home clothes = {clothes} no = {no} tab = {tab}/>}/>

        <Route path="/best" element={<Best bestdata = {bestdata} no = {no} tab = {tab} setBestdata = {setBestdata} setNo = {setNo}/>}/>

        <Route path="/best/:id" element={<Detail2 bestdata = {bestdata} no = {no} tab = {tab}/>}/>

        <Route path="/colaboration" element={<Colaboration colabodata = {colabodata} clothes = {clothes} no = {no} tab = {tab}/>}/>

        <Route path="/detail/:id" element={<Detail clothes = {clothes} no = {no} tab = {tab} />} />

        <Route path="/community" element={<Community />} />

          
        <Route path="/login" element={<Login />} />

        <Route path="/cart" element={<Cart/>}/>

        <Route path="*" element={<div><p>www</p></div>} />

        </Routes>


{/*footer */}
<Footer></Footer>


</div>

  );

}

export default App;
