import React from "react";
import {
  ButtonContainer,
  Header,
  HeroWrapper,
  ImageContainer,
} from "./Hero.style";
import Button from "../CustomButton/Button";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import phone from "../../assets/mock-up.png";

function Hero() {
  return (
    <HeroWrapper>
      <Header>
        <h1>
          Keep your <br /> plants <br /> alive
        </h1>
        <p>
          Schedule watering, fertilizing, and other care tasks based on your
          plant's unique needs, so you can be sure they're getting everything
          they need to flourish.
          <br />
          Download LeafLife today and give your plants the care they deserve.
        </p>
        <ButtonContainer>
          <Button size={"xl"}>
            <BsApple size={30} />
            <p>
              Download on the <br /> <span>App Store</span>
            </p>
          </Button>
          <Button size={"xl"}>
            <BsGooglePlay size={30} />
            <p>
              Download on the <br /> <span>Google Play</span>
            </p>
          </Button>
        </ButtonContainer>
      </Header>
      <ImageContainer>
        <img src={phone} alt="" />
      </ImageContainer>
    </HeroWrapper>
  );
}

export default Hero;
