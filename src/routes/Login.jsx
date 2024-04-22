import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    chkID();
    chkPW();
    
  };

  const chkPW = () => {
    // 비밀번호 체크 로직
    var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/;
    var hangulcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    if (!reg.test(password)) {
      alert('비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.');
    } else if (/(\w)\1\1\1/.test(password)) {
      alert('같은 문자를 4번 이상 사용하실 수 없습니다.');
    } else if (password.includes(id)) {
      alert('비밀번호에 아이디가 포함되었습니다.');
    } else if (password.includes(' ')) {
      alert('비밀번호는 공백 없이 입력해주세요.');
    } else if (hangulcheck.test(password)) {
      alert('비밀번호에 한글을 사용 할 수 없습니다.');
    } else {
      alert('로그인이 성공적으로 되었습니다.')
    }
  };


  const chkID = () => {
    // 이메일 형식 체크
    var emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegEx.test(id)) {
      alert('올바른 이메일 형식이 아닙니다.');
    } else {
      console.log('통과');
    }
  };

  return (
    <div>
      <div className='loginbox'>
        <Form onSubmit={handleSubmit}>
          <h2>지금 로그인하고 다양한 혜택을 만나 보세요</h2>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>ID</Form.Label>
            <Form.Control type='text' placeholder='Enter email' value={id} onChange={handleIdChange} />
            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          className='loginSwiper'
        >
          <SwiperSlide>
            <img src='/img/l1.jpg' alt='...' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/ba/2020-03-08_16.54.27_AK%ED%94%8C%EB%9D%BC%EC%9E%90_%EC%9B%90%EC%A3%BC%EC%A0%90_%EC%98%B7%EA%B0%80%EA%B2%8C.jpg' alt='...' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://www.koreaittimes.com/news/photo/202202/111175_58469_430.jpg' alt='...' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/l1.jpg' alt='...' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Login;