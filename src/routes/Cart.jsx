import React from 'react';

import { Table } from 'react-bootstrap';
import { useSelector, useDispatch, } from 'react-redux';
import { sortName, removeItem,decreaseCount, addItem} from "../store.js";
import { useState } from 'react';





function Cart(){

   // let user = useSelector(state => state.user);

   let cart = useSelector(state => state.cart);

   // let { name, age } = user;


   let dispatch = useDispatch() 
   const isCartEmpty = cart.length === 0;


   // let state = useSelector(state => state);

//cartcalc 안에 상품의 총 가격을 계산

const calculateTotalPrice = () => {
   let sum = 0;
   for (let i = 0; i < cart.length; i++) {
       const item = cart[i];
       sum += item.price * item.amount;
   }
   return sum;
};


const isFreeShipping = calculateTotalPrice() >= 100000;
const totalPrice = calculateTotalPrice();
const shippingFee = 5000;
const totalWtihShipping = totalPrice + shippingFee;


// const toggleSelectItem = (id) => {

//    dispatch(addCount(id));
// }


const handleRemoveItem = (id) => {
   dispatch(removeItem(id)); 
};

const handleDecreaseCount = (id) => {
   dispatch(decreaseCount(id));
};

const [selectedItems, setSelectedItems] = useState([]);

const checkboxToggleSelect = (id) => {
   if (selectedItems.includes(id)) {
       setSelectedItems(selectedItems.filter(itemId => itemId !== id));
   } else {
       setSelectedItems([...selectedItems, id]);
   }
};


const checkboxHandleDeleteSelected = () => {
   selectedItems.forEach(itemId => dispatch(removeItem(itemId)));
   setSelectedItems([]);
};


    // 체크박스 전체 선택 상태를 관리하는 변수와 함수
    const [selectAll, setSelectAll] = useState(false);

    const toggleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            setSelectedItems(cart.map(item => item.id));
        } else {
            setSelectedItems([]);
        }
    };


   return(

      <div style={{ marginTop:'300px'}}>

      <div className='carttitle'>

         <h2 style={{ marginLeft:'-100px'}}> 장바구니</h2> 

      </div>



      {/*장바구니가 비어있을 때 */}
         {isCartEmpty && (

            <div className='empty_cart'>
               <p>장바구니가 비어 있습니다.</p>
            </div>


         )}



         {/*장바구니가 비어있지 않을 때 */}
         {!isCartEmpty && (

            <>

            <div style={{display:'flex'}}>


               <div className='carttable' style={{width:'1400px', margin:'0 auto'}}>
                  <Table>

                     <thead>

                        <tr style={{borderBottom:'2px solid #828282'}}>

                        <th><input type='checkbox' checked={selectAll} onChange={toggleSelectAll} /></th>

                           <th></th>

                           <th></th>
                           <th><p>상품 정보</p></th>
                           <th><p>가격</p></th>
                           <th><p></p></th>
                           <th><p>변경</p></th>
                           <th><p></p></th>
                           <th><p>삭제</p></th>

                        </tr>

                     </thead>

                     <tbody>
                        {cart.map((item, index) =>
                           <tr key={index}>
                               <td><input type='checkbox' checked={selectedItems.includes(item.id)} onChange={() => checkboxToggleSelect(item.id)} /></td>
                              <td style={{ width: '200px' }}><img src={item.imgUrl} alt="carts_products" style={{ width: '20%' }}></img></td>
                              <td style={{ paddingTop: '25px' }}>{item.id}</td>
                              <td style={{ paddingTop: '25px' }} >{item.item}</td>
                            
                              <td style={{ paddingTop: '25px' }}>{(item.price * item.amount).toLocaleString()}원</td>


                              <td><button onClick={() => dispatch(addItem(item))} className='plus_btn'> + </button></td>
                              <td style={{ paddingTop: '20px', paddingLeft: '20px' }}>{item.amount}</td>
                              <td><button className='minus_btn' onClick={() => handleDecreaseCount(item.id)}> - </button></td>


                              <td style={{ paddingTop: '17px', paddingLeft:'10px' }}><button className='delete_btn' onClick={() => handleRemoveItem(item.id)}>삭제</button></td>
                           </tr>
                        )}
                     </tbody>


                  </Table>



               </div>

               <div className='cartcalc'>



                  {isFreeShipping ? (
                     
                  //    <p>상품 가격{totalPrice} + 배송비 0  <br></br>=총 가격 {totalPrice} 원
                  //    </p>
                  // ) : (<p>{totalPrice} + 배송비 5000 = {totalWtihShipping}</p>)}

                     <div style={{display:'flex', textAlign:'center', alignItems:'center'}}>
                        <p>상품 가격 <br></br> <b>{totalPrice.toLocaleString()}원</b></p>
                        <p style={{padding:'20px 20px'}}>+ </p>
                        <p>배송비 <br></br><b>0원</b></p>
                        <p style={{padding:'20px 20px'}}>= </p>
                        <p>합계 <br></br><b>{totalPrice.toLocaleString()}원</b></p>
                     </div>
                     

                  ): (
                  
                     
                     <div style={{display:'flex', textAlign:'center', alignItems:'center'}}>
                        <p>상품 가격 <br></br><b>{totalPrice.toLocaleString()}원</b> </p>
                        <p style={{padding:'20px 20px'}}>+ </p>
                        <p>배송비 <br></br><b>5,000원</b> </p>
                        <p style={{padding:'20px 20px'}}>= </p>
                        <p>합계 <br></br><b>{totalWtihShipping.toLocaleString()}원</b></p>
                     </div>

                  )

               }
               <button style={{width:'200px', padding:'10px 0px', borderRadius:'9px', marginLeft:'20%', marginTop:'30px', border:'1px solid #878787'}} >주문하기</button>

               </div>



               


            </div>


               <div style={{width: '1200px', margin:'0 auto', paddingBottom:'200px', paddingLeft:'150px'}}>

            <button className='cartSortName' onClick={() => {

               dispatch(sortName())

            }}>이름순정렬</button>{' '}


         <button className='delete_btn2' onClick={checkboxHandleDeleteSelected}>선택 삭제</button> {/* 체크박스 선택 삭제 버튼 */}

         </div>


         </>

         )}



      </div>

   )

}



export default Cart