import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ImgWrapper = styled.div`
  min-width: 400px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  > img {
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  overflow: hidden;
`;

export const ItemWrapper = styled.div`
  padding-bottom: 20px;
  margin-top: 20px;
  display: flex;
  gap: 30px;

  border-bottom: 1px solid black;
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

export const AdditionInfoWrapper = styled.div`
  padding-bottom: 20px;
  margin-top: 20px;
  display: flex;
  gap: 20px;

  border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
