// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ItemWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-top: 20px;
  width: 413px;
`;

export const ImgWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;

  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;

  > img {
    object-fit: cover;
  }
`;

export const HeroName = styled.p`
  margin-bottom: 48px;
  font-weight: 400;
  max-width: 100%;
  text-align: center;
  font-size: 48px;
  line-height: 1.17;
  color: #081f32;
`;

export const InformTitle = styled.p`
  margin-bottom: 48px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: #8e8e93;
`;

export const InfoList = styled.ul`
  width: 413px;
`;
export const InfoItem = styled.li`
  width: 100%;
  height: 64px;
  padding: 9px 16px;
  border: 1px solid #168b07;
`;

export const InfoType = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: #081f32;
`;

export const InfoValue = styled.p`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6e798c;
`;

export const Btn = styled.button`
  text-transform: uppercase;
  padding: 8px;
  display: flex;
  gap: 5px;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  transition: transform 250ms ease-in-out, color 250ms ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.1);
    color: orangered;
  }
`;
