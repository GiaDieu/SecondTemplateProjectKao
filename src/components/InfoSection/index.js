import React from "react";
import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoRow,
  InfoCol,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrapper,
  Img,
} from "./InfoSectionElement";

import { Container, Button } from "../../GlobalStyle";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  topline,
  lightText,
  headline,
  lightTextDesc,
  description,
  primary,
  ButtonLabel,
  start,
  img,
  alt,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoCol>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                <Link to="sign-up">
                  <Button fontBig primary={primary}>
                    {ButtonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoCol>
            <InfoCol>
              <ImgWrapper start={start.toString()}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoCol>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
