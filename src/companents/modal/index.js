import React,{useEffect} from 'react';
import styled from "styled-components";
import {ReactComponent as CloseIcon} from "../../assets/icons/close-icon.svg";

const Modal = ({show,onClose,children,style}) => {

    useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);

    const clickHandler = (e) => {
        if (e.target.classList.contains('glass')) {
            e.stopPropagation()
            onClose();
        }
    };

    return (
        <Wrapper className='glass' onClick={clickHandler} style={{display:show?'flex':'none'}}>
            <ContentWrapper style={style}>
                <CloseIconWrapper onClick={onClose}><CloseIcon/></CloseIconWrapper>
                {children}
            </ContentWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top:0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.80);
  z-index: 999999;
  transition: .3s ease-in;
`;
const ContentWrapper = styled.div`
  padding: 24px;
  border-radius: 18px;
  background: #FFF;
  position: relative;
`;
const CloseIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ECF3F6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export default Modal;
