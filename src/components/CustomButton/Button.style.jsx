import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.size == "xl"
      ? "width: 230px; height: 80px; font-size: 1rem;"
      : "width: fit-content; height: 45px;"};
  padding: 12px 30px;
  margin: 10px;
  border-radius: 30px;
  background: none;
  border: 1px solid var(--light);
  color: var(--light);
  cursor: pointer;

  & p {
    margin: 0 0 0 16px;
    padding: 0;
  }

  & p span {
    font-weight: 800;
  }

  &:hover {
    background-color: var(--light);
    color: var(--dark);
    transition: 0.3s;
  }
`;
