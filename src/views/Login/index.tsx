import React from "react";
import styled from "styled-components";


export default class Login extends React.Component {
  
  render() {
    
    const Canvas =  styled.div`
        display: flex;
        justify-content: center; /* horizontally center */
        align-items: center; /* vertically center */
        width: 100%;
        height: 100%;
        margin-top: 10%;
    `;

    const LogInBoxComponent = styled.div`
      /* background-color: white;
      width: 30%;
      height: 30%; 
      justify-content: center;
      border-radius: 6%; */
      padding-left: 12px;
      padding-right: 12px;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
    `;

    const LoginTitleComponent = styled.div`
      font-size: 20px;
      font-weight: bold;
      font-family: Rokkitt;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
      margin-bottom: 20px;
      width: 100%;
      text-align: center;
    `;
    
    const LoginForm = styled.form`
      display: flex;
  flex-direction: column;
  align-items: center;
    `;

    const LoginLabel = styled.label`
       font-weight: bold;
  margin-bottom: 8px;
    `;

    const LoginInput  = styled.input`
       width: 100%;
    padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
    `

    
    const Auth0Login = styled.a`
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    `


    return (
      <Canvas>
        <LogInBoxComponent>
        <LoginTitleComponent>Login</LoginTitleComponent>
        
        <LoginForm>
          <LoginLabel >Username</LoginLabel>
          <LoginInput type="text" id="username" name="username"></LoginInput>
          <LoginLabel >Password</LoginLabel>
          <LoginInput type="password" id="password" name="password"></LoginInput>
        </LoginForm>
        <Auth0Login href="https://www.example.com">Click Me</Auth0Login>
        </LogInBoxComponent>
      </Canvas>
    );
  }
}
