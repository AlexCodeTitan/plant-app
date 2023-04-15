import React from "react";
import {
  FooterWrapper,
  ListWrapper,
  Logo,
  LowerFooter,
  UpperFooter,
} from "./Footer.style";
import Button from "../CustomButton/Button";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import { BiLeaf } from "react-icons/bi";

function Footer() {
  return (
    <FooterWrapper>
      <UpperFooter>
        <h2>LeafLife</h2>
        <ListWrapper>
          <div>
            <h3>Navigation</h3>
            <div>
              <a href="#">About Leaflife</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Privacy policy</a>
              <a href="#">LeafLife for iOS</a>
              <a href="#">LeafLife for Android</a>
            </div>
          </div>
          <div>
            <h3>Contact</h3>
            <div>
              <a href="#">Help center</a>
              <a href="#">Support</a>
              <a href="#">Send us an e-mail</a>
            </div>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </ListWrapper>
      </UpperFooter>
      <LowerFooter>
        <div>
          <Logo>
            <BiLeaf size={25} />
          </Logo>
          <Button inverted>
            <BsApple size={20} />
            <p>
              <span>App Store</span>
            </p>
          </Button>
          <Button inverted>
            <BsGooglePlay size={20} />
            <p>
              <span>Google Play</span>
            </p>
          </Button>
        </div>
        <p>@2023 LeafLife. All rights reserved</p>
      </LowerFooter>
    </FooterWrapper>
  );
}

export default Footer;
