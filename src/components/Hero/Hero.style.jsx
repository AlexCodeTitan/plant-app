import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  height: 80vh;
  width: 60%;
  margin-top: 60px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    margin: 0 0 30px 0;
    font-size: 6rem;
  }
  & > p {
    width: 80%;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const ImageContainer = styled.div`
  & img {
    height: 100%;
  }
`;
