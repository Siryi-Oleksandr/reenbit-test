import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const Item = styled.li`
  padding: 5px;
  border-radius: 10px;
  width: 100%;

  &:not(:last-child) {
    @media screen and (max-width: 767px) {
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
  }

  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    box-shadow 250ms ease-in-out, transform 250ms ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 20px 10px,
      rgba(0, 0, 0, 0.3) 0px 10px 7px -2px;
    transform: scale(1.03);
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  > img {
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  padding-top: 10px;
  overflow: hidden;
`;
