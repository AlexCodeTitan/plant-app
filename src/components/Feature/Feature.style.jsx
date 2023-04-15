import styled from "styled-components";

export const FeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  ${(props) => (props.type === "circle" ? "flex-direction: row-reverse;" : "")}
  height: 60vh;
  width: 60vw;
  margin-top: 60px;
  padding: 30px;

  border-radius: 30px;

  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 150%;
  ${(props) =>
    props.type === "circle"
      ? "clip-path: circle(48.2% at 50% 50%); margin-left: 60px;"
      : props.type === "square"
      ? "margin-right: 60px;"
      : "clip-path: circle(87.8% at 0 16%); margin-right: 60px;"};

  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 30px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    font-size: 3rem;
    font-weight: 500;
    margin: 0 0 20px;
  }

  & p {
    font-size: 1.2rem;
  }
`;
