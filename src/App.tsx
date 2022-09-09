import React from "react";
import Routes from "./routes";
import NavigationBar from "components/NavigationBar/index";
import Footer from "components/Footer/index";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function App(): JSX.Element {
  document.body.style.backgroundColor = "#E5E5E5";
  const AppWrapper = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Ubuntu";
  `;
  const location = useLocation();
  

  return (
    <AppWrapper>
      <NavigationBar />
      <Routes />
      {location.pathname == "/" && <Footer />}
    </AppWrapper>
  );
}
