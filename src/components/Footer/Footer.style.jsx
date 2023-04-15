import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30rem;
  margin-left: 10px;
  padding: 50px 0 30px 0;
  background-color: var(--light);
  color: var(--dark);
`;

export const UpperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;

  & > h2 {
    font-size: 2.4rem;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > div {
      display: flex;
      flex-direction: column;

      & a {
        margin-bottom: 5px;
      }
    }
  }
`;

export const LowerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: var(--dark);
  color: var(--light);
`;
