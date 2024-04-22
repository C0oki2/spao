import React from 'react'

const Title = () => {

    let css1 = {
        marginTop:'150px',
        marginLeft:'15%',
        textAlign:'center',
        fontSize : '40px',
        fontWeight:'bold'
    }


    return (
    <div>
        <h3 style = {css1}>
            Md's Pick
        </h3>

        <p style = {{textAlign:'center',  marginLeft:'15%'}}>시선을 사로잡는 스타일링, 제품들을 만나 보세요.</p>

    </div>
  )
}

export default Title