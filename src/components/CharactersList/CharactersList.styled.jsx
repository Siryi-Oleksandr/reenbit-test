import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 51px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Item = styled.li`
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 240px;

  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);

  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 168px;
  border: 1px solid green;
  overflow: hidden;

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* object-position: 50% 50%; */
  }
`;

export const InfoWrapper = styled.div`
  padding: 12px 16px;
  overflow: hidden;
`;

export const HeroName = styled.p`
  width: 208px;
  height: 30px;
  overflow: hidden;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

export const HeroSpecies = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;
