import React from 'react';

import {useDispatch} from 'react-redux'

import {addItem} from '../store.js'



const Order = () => {

   let dispatch = useDispatch()



   return (

      <div style={{ marginTop: '50px' }}>

         <hr></hr>

         <h4>주문하기 페이지</h4>

         <button onClick={() => {

            dispatch(addItem({ id: 3, item: '오렌지', amount: 15 }))

         }}>오렌지 주문하기</button>

      </div>

   );

};


export default Order;
