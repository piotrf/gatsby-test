import css from "styled-components";
import React from "react";
import { func, object, oneOfType } from "prop-types";
import Link from "gatsby-link";

import "./reset.css";
import "./layout.css";
import "../assets/fonts/iconfont/style.css";

import { breakpoint, color, font, setSpace, setType } from "../utils";

import Init from "../partials/Init";
import Menu from "../partials/Menu";
import Topbar from "../partials/Topbar";

const LayoutEl = css.div`
  ${setType("s")};
  color: ${color.blackM};
  display: flex;
  flex-direction: row;
  font-family: ${font.pri};
  min-height: 100%;
  &::selection,
  & *::selection {
    background: ${color.blackHL};
  }
  &::-moz-selection,
  & *::-moz-selection {
    background: ${color.blackHL};
  }
`;

const LayoutBody = css.div`
  background: ${color.blackHL};
  height: 100%;
  width: 100%;
`;

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuState: false
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }
  toggleMobileMenu() {
    this.setState({ mobileMenuState: !this.state.mobileMenuState });
  }
  render() {
    const currentPath = this.props.location.pathname;
    return [
      <Init key="init" />,
      <Topbar
        invert={
          currentPath.match("/impressum") ||
          currentPath.match("/photographed") ||
          currentPath.match("/404")
        }
        key="topbar"
        mobileMenuState={this.state.mobileMenuState}
        toggleMobileMenu={this.toggleMobileMenu}
      />,
      <LayoutEl key="layout">
        <Menu
          location={this.props.location.pathname}
          mobileMenuState={this.state.mobileMenuState}
          toggleMobileMenu={this.toggleMobileMenu}
        />
        <LayoutBody>{this.props.children()}</LayoutBody>
      </LayoutEl>
    ];
  }
}

Layout.propTypes = {
  children: func.isRequired,
  location: oneOfType([object]).isRequired
};
