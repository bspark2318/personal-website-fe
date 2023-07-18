import React from "react";
import styled from "styled-components";

console.log("Hello World");

export default class Login extends React.Component {
  
  render() {
    
    const LogInBoxComponent = styled.div`
      background-color: white;
    `;

    const LoginTitleComponent = styled.div`
      font-size: 78px;
      font-family: Rokkitt;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      text-shadow: 2px 2px #a3a2a2;
      text-align: center;
      margin-top: 180px;
    `;

    const LoginSubtitleComponent = styled.div`
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
        <LogInBoxComponent>
        <LoginTitleComponent>Login</LoginTitleComponent>
        <LoginSubtitleComponent>
          Welcome to my playground. This is where I encourage myself <br/>
          to make a lot of mistakes and learn and grow from them. <br/>
          If you have any questions, recommendations, and/or concerns, feel free <br/>
          to reach out through the contact page. Otherwise, have fun visiting!<br/>
        </LoginSubtitleComponent>
        </LogInBoxComponent>
      </div>
    );
  }
}
