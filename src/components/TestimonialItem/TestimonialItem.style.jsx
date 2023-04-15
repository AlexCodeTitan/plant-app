import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 14rem;
  min-width: 60rem;
  max-width: 60rem;
  margin: 2rem;
  padding: 16px 30px;
  background-color: var(--light);
  color: var(--dark);
  border-radius: 30px;

  & h2,
  h3 {
    margin: 10px 0;
  }

  & p {
    font-size: 1.1rem;
  }
`;
