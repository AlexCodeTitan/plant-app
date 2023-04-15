import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  margin: 10px;
  border-radius: 30px;
  background: none;
  cursor: pointer;
  ${({ size }) =>
    size == "xl"
      ? "width: 230px; height: 80px; font-size: 1rem;"
      : "width: fit-content; height: 45px;"};
  ${({ inverted }) =>
    inverted
      ? "border: 1px solid var(--dark); color: var(--dark);"
      : "border: 1px solid var(--light); color: var(--light);"}

  & p {
    margin: 0 0 0 16px;
    padding: 0;
  }

  & p span {
    font-weight: 800;
  }

  &:hover {
    ${({ inverted }) =>
      inverted
        ? "background-color: var(--dark); color: var(--light);"
        : "background-color: var(--light); color: var(--dark);"}
    transition: 0.3s;
  }
`;
