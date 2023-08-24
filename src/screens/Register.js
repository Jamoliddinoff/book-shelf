import React, {useState} from 'react';
import Text from "../companents/Text";
import TextInput from "../companents/text-input";
import styled from "styled-components";
import Button from "../companents/Button";
import {userRegister} from "../api/entities";
import {useDispatch} from "react-redux";
import {signIn} from "../store/loginSlice";
import HomeIcon from "../assets/shelf.png";

const Register = () => {
    const [loader,setLoader] = useState(false);
    const [error,setError] = useState('');
    const dispatch = useDispatch();

    const submit = (ev) =>{
        ev.preventDefault();
        const data = {
            name: ev.target[0].value,
            email: ev.target[1].value,
            key: ev.target[2].value,
            secret: ev.target[3].value
        }
        if(data.name && data.email && data.key && data.secret){
            setLoader(true);
            const form = new FormData();
            form.append('name',data.name);
            form.append('email',data.email);
            form.append('key',data.key);
            form.append('secret',data.secret);
            userRegister(form).then(res => {
                dispatch(signIn(res?.data?.data));
                setError('')
            }).catch(err=>console.log('error----->',err))
        }else {
            setError('Fill in the form')
        }
    }
    return (
        <Wrapper>
            <LogoWrapper>
                <img src={HomeIcon} alt={'home-icon'}/>
                <Text size={30} color={'#000'} weight={'600'}>Books shelf</Text>
            </LogoWrapper>
            <hr/>
            <Title>
                <Text size={24} color={'#000'} weight={'600'}>Register</Text>
            </Title>
            <InputWrapper onSubmit={submit}>
                <TextInput label={'Name'} iconLeft={'user'} placeholder={'John Doe'}/>
                <TextInput label={'Email'} iconLeft={'email'} type={'email'} placeholder={'Email@email.com'}/>
                <TextInput label={'Key code'} type={'password'}/>
                <TextInput label={'Secret code'} type={'password'}/>
                {error && <Text color={'red'}>{error}</Text>}
                <Button type={'submit'}>{loader?'Loading...':'Register'}</Button>
            </InputWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 40%;
  margin: 40px auto;
  background: #fdfdfd;
  padding: 30px 0px 60px 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #c9c9c9;
  @media(max-width: 950px){
    width: 80%;
  }
  @media(max-width: 900px){
    width: 90%;
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-decoration: none;

  img {
    width: 32px;
    height: 32px;
    @media (max-width: 480px) {
      width: 16px;
      height: 16px;
    }
  }
  p{
    @media (max-width: 480px) {
      font-size: 14px !important;
    }
  }
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const InputWrapper = styled.form`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;


export default Register;
