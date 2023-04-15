import React from "react";
import { Description, FeatureWrapper, ImageWrapper } from "./Feature.style";
import Button from "../CustomButton/Button";

function Feature({ type, image, title, subtitle, text }) {
  return (
    <FeatureWrapper type={type}>
      <ImageWrapper type={type}>
        <img src={image} alt="" />
      </ImageWrapper>
      <Description>
        <p>{subtitle}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button>Download now</Button>
      </Description>
    </FeatureWrapper>
  );
}

export default Feature;
