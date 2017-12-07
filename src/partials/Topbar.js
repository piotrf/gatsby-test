import React from "react";
import { bool, func } from "prop-types";
import css from "styled-components";
import Link from "gatsby-link";

import { breakpoint, color, time, setting, setType, setSpace } from "../utils";

import Button from "../components/Buttons/Button";
import Logo from "../components/Logo";

const TopbarEl = css.header`
  ${setSpace("phl")};
  align-items: center;
  color: ${color.blackM};
  display: flex;
  flex-direction: row;
  height: ${setting.topbarHeight.default};
  justify-content: space-between;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: background-color ${time.l}, box-shadow ${time.l}, height ${
  time.l
}, padding ${time.l};
  z-index: 3;
  > div:nth-child(1),
  > div:nth-child(3) {
    flex-basis: 25%;
  }
  > div:nth-child(2) {
    flex-basis: 50%;
    text-align: center;
  }
  > div:nth-child(3) {
    text-align: right;
  }
  ${breakpoint.tablet} {
    display: none;
  }
  ${props =>
    props.offset
      ? `
    background-color: ${color.whiteBlk};
    box-shadow: ${
      !props.mobileMenuState ? `0 1px 3px ${color.blackLt}` : `none`
    };
    height: ${setting.topbarHeight.offset};
  `
      : null}
  .icon--menu {
    ${setType("m")};
    line-height: 0;
    position: relative;
    top: .2em;
  }
`;

export default class Topbar extends React.Component {
  constructor() {
    super();
    this.state = { hasOffset: false };
    this.updateOffset = this.updateOffset.bind(this);
  }
  componentDidMount() {
    this.updateOffset();
    window.addEventListener("scroll", this.updateOffset);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateOffset);
  }
  updateOffset() {
    return this.setState({ hasOffset: window.pageYOffset > 0 });
  }
  render() {
    return (
      <TopbarEl {...this.props} offset={this.state.hasOffset}>
        <div>
          <Button
            handleClick={() => this.props.toggleMobileMenu()}
            invert={
              !this.props.mobileMenuState &&
              !this.state.hasOffset &&
              this.props.invert
            }
            secondaryLink
          >
            Menu
          </Button>
        </div>
        <div>
          <Link
            to="/"
            href="/"
            onClick={
              this.props.mobileMenuState ? this.props.toggleMobileMenu : null
            }
          >
            <Logo
              invert={
                !this.props.mobileMenuState &&
                !this.state.hasOffset &&
                this.props.invert
              }
            />
          </Link>
        </div>
        <div>
          <Button secondaryLink to="/" href="/">
            Bttn
          </Button>
        </div>
      </TopbarEl>
    );
  }
}

Topbar.propTypes = {
  invert: bool,
  mobileMenuState: bool.isRequired,
  toggleMobileMenu: func.isRequired
};

Topbar.defaultProps = {
  invert: false
};
