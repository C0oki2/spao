import { configureStore, createSlice } from '@reduxjs/toolkit';

// user slice 생성
const userSlice = createSlice({
   name: 'user',
   initialState: { name: 'kim', age: 20 },
   reducers: {
      changeName(state) {
         state.name = 'john kim';
      },
      increase(state, action) {
         state.age += action.payload;
      }
   }
});

// cart slice 생성
const cartSlice = createSlice({
   name: 'cart',
   initialState: [],
   reducers: {


      decreaseCount(state, action) {
         const { payload: id } = action;
         const itemIndex = state.findIndex(item => item.id === id);
         if (itemIndex !== -1) {
            if (state[itemIndex].amount > 1) {
               state[itemIndex].amount -= 1;
               // 최소 1개 이상이어야 합니다.
            } else {
            alert('구매 가능한 최수 수량은 1개입니다.');
            }
         }
      },

      removeItem(state, action) {
         const idToRemove = action.payload;
         // payload로 받은 id를 가진 상품을 장바구니에서 제거합니다.
         return state.filter(item => item.id !== idToRemove);
      },

      TOGGLE_SELECT_ITEM(state, action) {
         const { payload: id } = action;
         const selectedItem = state.find(item => item.id === id);
         if (selectedItem) {
            selectedItem.selected = !selectedItem.selected;
         }
      },
      
      sortName(state) {
         state.sort((a, b) => a.item > b.item ? 1 : -1);
      },

      addCount(state, action) {
         const { payload: newItem } = action;
         const itemIndex = state.findIndex(item => item.id === newItem.id);
         
         if (itemIndex > -1) {
             state[itemIndex].amount += 1;
             alert('이미 상품이 담겨 있습니다. 수량이 합산됩니다.');
         } else {
             state.push(newItem);
         }
       },
       
       addItem(state, action) {
         const newItem = action.payload;
         const itemIndex = state.findIndex(item => item.id === newItem.id);
         
         if (itemIndex > -1) {
           // 이미 장바구니에 존재하는 상품인 경우 수량을 증가시킵니다.
           state[itemIndex].amount += 1;
         } else {
           // 새로운 상품을 추가합니다.
           state.push(newItem);
         }
       },
       
     
   }
});

// cartbest slice 생성
const cartBestSlice = createSlice({
   name: 'cartbest',
   initialState: [
      { id: 0, item: 'White and Black', amount: 2 },
      { id: 2, item: 'Grey Yordan', amount: 1 }
   ],
   reducers: {
      addCount2(state, action) {
         let idx = state.findIndex(a => a.id === action.payload);
         ++state[idx].amount;
      },
      sortName2(state) {
         state.sort((a, b) => a.item > b.item ? 1 : -1);
      },
      addItem2(state, action) {
         state.push(action.payload);
      },
   }
});

// bestbutton slice 생성
const bestButtonSlice = createSlice({
   name: 'bestbutton',
   initialState: [],
   reducers: {
      mysearch(state, action) {
         const value = action.payload.toLowerCase();
         state.filteredList = state.myList.filter(item => item.toLowerCase().includes(value));
      },
   }
});

// 스토어 생성
const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      cart: cartSlice.reducer,
      cartbest: cartBestSlice.reducer,
      bestbutton: bestButtonSlice.reducer,
   }
});

// 액션 생성자 내보내기
export const { changeName, increase } = userSlice.actions;
export const { TOGGLE_SELECT_ITEM, addCount, sortName, addItem, removeItem,decreaseCount  } = cartSlice.actions;
export const { addCount2, sortName2, addItem2 } = cartBestSlice.actions;
export const { mysearch } = bestButtonSlice.actions;

export default store;
