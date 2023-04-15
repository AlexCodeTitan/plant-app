import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 99vw;
  cursor: grab;
  overflow: hidden;
`;

export const InnerCarousel = styled.div`
  display: flex;
  width: 60vw;
`;

export const TestimonialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;

  & > h1 {
    margin: 3rem 0;
    font-size: 3rem;
  }
`;
