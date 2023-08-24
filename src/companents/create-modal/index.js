import React, {useEffect, useState} from 'react';
import Text from "../Text";
import TextInput from "../text-input";
import Button from "../Button";
import Modal from "../modal";
import styled from "styled-components";

const CreateModal = ({show,onClose,handleBtn,loading,item}) => {
    const [input,setInput] = useState( "");
    useEffect(()=>{
        item && setInput(item?.status);
    },[item])
    return (
        <Modal show={show} onClose={()=>{
            onClose();
            setInput('')
        }}>
            <ModalContainer>
                <Text size={24} color={'#000'} weight={'600'}>{item ? item?.book?.title||'n/a':'Create book'}</Text>
                <TextInput
                    label={item?'Status':'ISBN'}
                    placeholder={item?'Status':'ISBN'}
                    type={item ? 'number' : null}
                    value={input}
                    onChange={ev => setInput(ev.target.value)}
                />
                <Button onClick={()=>{
                    handleBtn(input.trim());
                    setInput('')
                }}>{loading ? 'Loading...':item?'Edit status':'Create'}</Button>
            </ModalContainer>
        </Modal>
    );
};
const ModalContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media(max-width: 500px){
    width: 300px;
  }
`;

export default CreateModal;
