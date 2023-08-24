import React from 'react';
import styled from "styled-components";
import SVGIcon from "../../assets/SVGicon";

const TextInput = ({label,placeholder,iconLeft,...props}) => {
    return (
        <Wrapper>{label}
            <input style={{paddingLeft:iconLeft?40:null}} placeholder={placeholder} {...props}/>
            {iconLeft && (
                <SVGIcon className="iconLeft" name={iconLeft} fill="rgb(55, 53, 214)" />
            )}
        </Wrapper>
    );
};

const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  color:  #6F7586;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  flex: 1;
  input{
    //appearance: none;
    background: #F4F6FC;
    height: 40px;
    border: 1px solid #E7E9F0;
    border-radius: 12px;
    font-size: 16px;
    color: #000;
    transition-property: border, color;
    transition-duration: 400ms;
    flex: 1;
    padding: 12px 16px;
  }
  svg{
    position: absolute;
    top:24px;
    left: 8px;
  }
`;
export default TextInput;
