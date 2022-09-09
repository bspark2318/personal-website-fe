import React from "react";
import styled from "styled-components";

export default class About extends React.Component {
  render() {
    const HomeTitleComponent = styled.div`
      font-size: 78px;
      font-family: Rokkitt;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      text-shadow: 2px 2px #a3a2a2;
      text-align: center;
      margin-top: 180px;
    `;

    const HomeSubtitleComponent = styled.div`
      font-size: 32px;
      font-family: Rokkitt;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      text-align: center;
      margin-top: 88px;
      line-height: 1.5;
      margin-bottom: 88px;
    `;

    return (
      <div>
        <HomeTitleComponent>About</HomeTitleComponent>
        <HomeSubtitleComponent>
          Welcome to my playground. This is where I encourage myself <br/>
          to make a lot of mistakes and learn and grow from them. <br/>
          If you have any questions, recommendations, and/or concerns, feel free <br/>
          to reach out through the contact page. Otherwise, have fun visiting!<br/>
        </HomeSubtitleComponent>
      </div>
    );
  }
}
