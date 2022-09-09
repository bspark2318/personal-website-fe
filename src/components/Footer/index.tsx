import React from "react";
import styled from "styled-components";
import GitHub from "assets/static_image/GitHub-Mark-32px.png";
import LinkedIn from "assets/static_image/LI-In-Bug.png";

export default function Footer(): JSX.Element {
  const FooterDiv = styled.div`
    position: absolute;
    bottom: 36px;
    right: 36px;
    font-family: Rokkitt;
    font-size: 18px;
    text-align: right;
    font-weight: bold;
    opacity: 0.4;
  `;

  const GitHubIconImage = styled.img`
    width: 20px;
    height: 20px;
  `;

  const LinkedInIconImage = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 6px;
  `;

  return (
    <FooterDiv>
      <div>Built with React</div>
      <div>
        © DoWrongPark 2022 |{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/bspark2318"
        >
          <GitHubIconImage src={GitHub}></GitHubIconImage>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/bspark2318/"
        >
          <LinkedInIconImage src={LinkedIn}></LinkedInIconImage>
        </a>
      </div>
    </FooterDiv>
  );
}
