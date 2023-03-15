import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: transform 50ms ease-in-out, color 250ms ease-in-out,
    box-shadow 250ms ease-in-out;

  &:active {
    transform: scale(0.95);
  }
  &:hover,
  &:focus {
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;
