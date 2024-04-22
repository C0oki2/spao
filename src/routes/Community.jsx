import '../App.scss';

import { useState } from 'react';



function Community() {

    let [title, setTitle] = useState(['옷이 예뻐요', '재입고 언제 되나요 ', '품절 풀어주세요','옷이 예뻐요']);
    let [titlenum, setTitlenum] = useState(0);
    let [input, setInput] = useState('');
    let [modal, setModal] = useState(false);



    return (

        <div className="Community" style={ {marginTop:'100px'}}>

            <div className="red-nav">
             
            </div>


            <div className='comment'>
            {

                title.map((tit, i) =>
                  <div className="list" key={i}>
                        <h4 onClick={() => {
                            setModal(true);
                            setTitlenum(i);

                        }}>{tit}</h4>
                        <p>{getDate()}</p>
                        <hr></hr>
                    </div>

                )

            }

            <input type="text" onChange={e => {
                setInput(e.target.value);

            }}></input>

            <button onClick={() => { 
                let copy = [...title];
                copy.unshift(input);
                setTitle(copy);
            }}>글 추가</button>

            {
                modal == true ? <Modal title={title} setTitle={setTitle} setModal={setModal} titlenum={titlenum} /> : null
            }

        </div>
        </div>

    );

}


function Modal(props) {

    return (

        <div className="modal">

            <h4>{props.title[props.titlenum]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                props.setModal(false);
            }}>창 닫기</button>

        </div>

    )

}


// 현재 날짜를 문자열로 반환하는 함수
function getDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}



export default Community;
