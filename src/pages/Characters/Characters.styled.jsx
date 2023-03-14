import styled from 'styled-components';

export const LogoWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;

  width: 290px;
  height: 100px;

  @media screen and (min-width: 530px) {
    width: 400px;
    height: 135px;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 200px;
  }

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
