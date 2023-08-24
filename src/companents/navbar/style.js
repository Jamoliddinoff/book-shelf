import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  margin: 0px 12px;
`;

export const LogoWrapper= styled.div`
  svg{
    height: 45px;
  }
  @media (max-width: 480px) {
    svg {
      height: 35px;
    }
  }
  @media (max-width: 400px) {
    svg {
      height: 30px;
    }
  }
`;

export const HomeLogo= styled.div`
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


export const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  cursor: pointer;
`;

export const LanguageList = styled.div`
  list-style: none;
  position: absolute;
  top: 30px;
  border-radius: 8px;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.4);
  overflow: hidden;
  div {
    padding: 6px 12px;
    width: 100%;
    cursor: pointer;
    text-align: center;
    &:hover{
      background: #f6f6f6;
    }
  }
`;

