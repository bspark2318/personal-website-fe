import React from "react";
import styled from "styled-components";
import { useSpring, animated as a, useSpringRef, useChain } from "react-spring";
import NavigationButton from "components/NavigationButton/index";
import { NavLink, useLocation } from "react-router-dom";

export default function NavigationBa(): JSX.Element {
  const BlackBar = styled.div`
    width: 100%;
    background-color: #2b2424;
    top: 0;
    height: 60px;
    font-size: 20px;
  `;

  const WebsiteLogoContainer = styled.div`
    color: white;
    display: inline-block;
    margin-left: 120px;
    margin-top: 19px;
  `;

  const slideInRef = useSpringRef();
  const slideInAnimation = useSpring({
    from: { x: -400 },
    to: { x: 0 },
    delay: 500,
    ref: slideInRef,
  });

  const tiltRightRef = useSpringRef();
  const tiltRightAnimation = useSpring({
    ref: tiltRightRef,
    transform: "rotate(13deg)",
    from: {
      transform: "rotate(0deg)",
    },
    delay: 500,
  });

  const tiltLeftRef = useSpringRef();
  const tiltLeftAnimation = useSpring({
    ref: tiltLeftRef,
    transform: "rotate(-21deg)",
    from: {
      transform: "rotate(0deg)",
    },
    delay: 270,
  });

  const tiltRightAgainRef = useSpringRef();
  const tiltRightAgainAnimation = useSpring({
    ref: tiltRightAgainRef,
    transform: "rotate(5deg)",
    from: {
      transform: "rotate(0deg)",
    },
    delay: 1200,
  });

  const tiltRightAgainAgainRef = useSpringRef();
  const tiltRightAgainAgainAnimation = useSpring({
    ref: tiltRightAgainAgainRef,
    transform: "rotate(3deg)",
    from: {
      transform: "rotate(0deg)",
    },
    delay: 3700,
  });

  useChain(
    [
      slideInRef,
      tiltRightRef,
      tiltLeftRef,
      tiltRightAgainRef,
      tiltRightAgainAgainRef,
    ],
    [0, 0.2, 0.7, 0.8, 1]
  );

  const NavigationButtonsContainer = styled.div`
    float: right;
    margin-right: 170px;
    margin-top: 19px;
    display: inline-block;
  `;

  const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
  `;

  const location = useLocation();

  const renderAnimation = location.pathname == "/";

  return (
    <BlackBar>
      <WebsiteLogoContainer>
        <a.div style={renderAnimation ? slideInAnimation : {}}>
          <a.div style={renderAnimation ? tiltLeftAnimation : {}}>
            <a.div style={renderAnimation ? tiltRightAnimation : {}}>
              <a.div style={renderAnimation ? tiltRightAgainAnimation : {}}>
                <a.div style={renderAnimation ? tiltRightAgainAgainAnimation : {}}>
                  <StyledNavLink to={"/"}>Do Wrong Park</StyledNavLink>
                </a.div>
              </a.div>
            </a.div>
          </a.div>
        </a.div>
      </WebsiteLogoContainer>
      <NavigationButtonsContainer>
        <NavigationButton content="About" route="about"></NavigationButton>
        <NavigationButton content="Write" route="write"></NavigationButton>
        <NavigationButton content="Capture" route="capture"></NavigationButton>
        <NavigationButton content="Create" route="create"></NavigationButton>
      </NavigationButtonsContainer>
    </BlackBar>
  );
}
