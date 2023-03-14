import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const FilterLabel = styled.label`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 290px;

  display: flex;
  align-items: center;

  @media screen and (min-width: 530px) {
    width: 400px;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
  }

  @media screen and (min-width: 1050px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 16px;
  padding-left: 60px;
  display: inline-block;
  width: 100%;
  height: 56px;
  font-family: inherit;
  font-size: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  outline: none;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 2px solid #0e93c7c5;
  }
`;

export const Icon = styled(BsSearch)`
  position: absolute;
  top: 16px;
  left: 12px;
  width: 25px;
  height: 25px;
`;
