import css from "styled-components";
import React from "react";
import Link, { withPrefix } from "gatsby-link";
import { bool, func, string } from "prop-types";

import { breakpoint, color, setting, setSpace, setType } from "../utils";

import Button from "../components/Buttons/Button";
import Copy from "../components/Copy";
import Logo from "../components/Logo";
import Separator from "../components/Separator";

const Tagline = css.span`
  ${setType("x")};
  color: ${color.blackLLt};
  display: block;
  font-weight: 400;
`;

const MenuEl = css.header`
  ${setSpace("pal")};
  background: ${color.white};
  bottom: 0;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  ${breakpoint.tablet} {
    display: flex;
    width: ${setting.sidebarSize.tablet};
  }
  ${breakpoint.desktop} {
    width: ${setting.sidebarSize.desktop};
  }
  ${breakpoint.hdesktop} {
    width: ${setting.sidebarSize.hdesktop};
  }
  @media all and (max-height: 400px) {
    padding-bottom: 0;
    padding-top: 40px;
    align-items: center;
    justify-content: center;
  }
  ${breakpoint.onlyphone} {
    ${setSpace("pbh")};
    display: ${props => (props.isActive ? `flex` : `none`)};
    right: 0;
    justify-content: center;
    text-align: center;
    width: 100%;
    z-index: 2;
  }
`;
const MenuHd = css.div`
  flex-basis: 25%;
  ${breakpoint.onlyphone} {
    display: none;
  }
`;
const MenuBd = css.nav`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  justify-content: center;
`;
const MenuFt = css.div`
  display: flex;
  flex-basis: 25%;
  flex-direction: column;
  justify-content: flex-end;
  ${breakpoint.onlyphone} {
    display: none;
  }
  a {
    font-size: 11px;
  }
`;
const MenuItems = css.ul`
`;
const MenuItem = css.li`
  ${setSpace("mvm")};
  a {
    ${setType("s")};
  }
  ${breakpoint.onlyphone} {
    ${setSpace("mvl")};
    a {
        ${setType("l")};
    }
  }
`;

const Menu = props => (
  <MenuEl isActive={props.mobileMenuState}>
    <MenuHd>
      Head
    </MenuHd>
    <MenuBd>
      <MenuItems>
        <MenuItem>
          <Button
            className={props.location === withPrefix("/") ? `active` : null}
            handleClick={() => props.toggleMobileMenu()}
            href="/"
            secondaryLink
            to="/"
          >
            Home
          </Button>
        </MenuItem>
      </MenuItems>
    </MenuBd>
    <MenuFt>
      <Copy>
        Foot
      </Copy>
    </MenuFt>
  </MenuEl>
);

Menu.propTypes = {
  location: string.isRequired,
  mobileMenuState: bool,
  toggleMobileMenu: func.isRequired
};

Menu.defaultProps = {
  mobileMenuState: false
};

export default Menu;
