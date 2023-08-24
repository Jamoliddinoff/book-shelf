import React from 'react';
import styled from "styled-components";

const Button = ({children,...props}) => {
    return (
        <ButtonWrapper {...props}>
            {children}
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.button`
  padding: 14px 50px;
  border-radius: 12px;
  background: ${prop => prop.theme.colors.main};
  color: #fff;
  border: none;
  font-size: 16px;
`;
export default Button;
