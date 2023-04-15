import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  width: 99vw;
  height: 80px;
  background: none;

  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & span {
      margin: 0 16px;
    }
  }

  & a {
    font-size: 1.2rem;
  }
`;
