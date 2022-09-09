import React from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default class Home extends React.Component {
  render() {
    const HomeTitleComponent = styled.div`
      font-size: 78px;
      font-family: Rokkitt;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      text-shadow: 2px 2px #a3a2a2;
      text-align: center;
      margin-top: 120px;
    `;

    const HomeSubtitleComponent = styled.div`
      font-size: 38px;
      font-family: Rokkitt;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      text-align: center;
      margin-top: 48px;
      margin-bottom: 88px;
    `;

    const ActivityContainer = styled.div`
      width: 450px;
      font-size: 26px;
      border-radius: 30px;
      background-color: white;
      padding: 8px 48px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 40px;
      &:hover {
        cursor: pointer; 
      }
    `;

    const IconWrapper = styled.span`
      position: relative;
      top: 6px;
    `;

    const StyledSpan = styled.span`
      margin-left: 18px;
      font-family: Rokkitt;
      position: relative;
      bottom: 5px;
    `;

    return (
      <div>
        <HomeTitleComponent>Hi 👋🏻</HomeTitleComponent>
        <HomeSubtitleComponent>
          This is personal repository where I
        </HomeSubtitleComponent>
        <ActivityContainer>
          <IconWrapper>
            <EditIcon fontSize="large" />
          </IconWrapper>
          <StyledSpan>Write</StyledSpan>
        </ActivityContainer>
        <ActivityContainer>
          <IconWrapper>
            <CameraAltIcon fontSize="large" />
          </IconWrapper>
          <StyledSpan>Capture</StyledSpan>
        </ActivityContainer>
        <ActivityContainer>
          <IconWrapper>
            <AddCircleOutlineIcon fontSize="large" />
          </IconWrapper>
          <StyledSpan>Create</StyledSpan>
        </ActivityContainer>
      </div>
    );
  }
}
