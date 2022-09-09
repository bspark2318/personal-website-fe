import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface NavigationButtonProps {
    content: string;
    route: string;
}

export default function NavigationButton({content, route} : NavigationButtonProps): JSX.Element {
  const StyledNavLink = styled(NavLink)`
    &.active {
      color: #2b2424;
      text-decoration: none;
      background-color: white;
    }
    color: white; 
    text-decoration: none;
    font-weight: 500;
    padding: 4px 14px;
    border-radius: 20px;
    background-color: #2b2424;
    margin-right: 20px;
  `;

  return <StyledNavLink to={`/${route}`}>{content}</StyledNavLink>;
}
