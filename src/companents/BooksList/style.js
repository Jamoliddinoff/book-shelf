import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 14px;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const CardItem = styled.div`
  width: 311px;
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 20px;
  box-shadow: 0px 9px 18px 0px rgba(0, 0, 0, 0.08);
  position: relative;
  span{
    position: absolute;
    right: 20px;
    top:30px;
    border-radius: 10px;
    padding: 4px 8px;
    color: #eeeeee;
    font-size: 12px;
  }
  @media (max-width: 720px) {
    width: 270px;
  }
  @media (max-width: 640px) {
    width: 230px;
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: ${props => props?.fit === '1' ? '100%' : '50%'};
  height: ${props => props?.fit === '1' ? '100%' : '50%'};
  object-fit: ${props => props?.fit === '1' ? 'cover' : null};
`;

export const DescriptionItem =  styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 10px 0px;
  span{
    width: 24px;
    height: 24px;
  }
`;
export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlaceholderText = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  p{
    text-align: center;
  }
`;

