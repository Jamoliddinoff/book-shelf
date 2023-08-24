import React from 'react';
import styled from "styled-components";

const Container = ({children,background,...props}) => {

    return (
        <Wrapper background={background} {...props}>
            {children}
        </Wrapper>
    );
};


const Wrapper = styled.section`
  width:1080px;
  margin: auto;
  @media (max-width: 1080px) {
    width: calc(100% - 24px);
  }
  padding: 0px 12px;
`

export default Container;
