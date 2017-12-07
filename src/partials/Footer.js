import React from "react";
import css from "styled-components";

import { breakpoint, color, font, setSpace, setType } from "../utils";

import Button from "../components/Buttons/Button";
import IconicButton from "../components/Buttons/IconicButton";

const FooterEl = css.footer`
  ${setType("x")};
  display: flex;
  flex-direction: column;
  font-family: ${font.pri};
  justify-content: space-between;
  width: 100%;
  a {
    color: ${color.blackD};
    &:hover {
      color: ${color.blackBlk};
    }
  }
  > * {
    ${setSpace("mas")};
    text-align: center;
  }
  > p:nth-child(1) {
    a {
      ${setSpace("mhs")};
      ${breakpoint.tablet} {
        ${setSpace("mhx")};
      }
    }
  }
  ${breakpoint.tablet} {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    align-items: center;
    flex-direction: row;
    z-index: 1;
    > * {
      flex-basis: ${100 / 2}%;
    }
    > *:nth-child(1) {
      text-align: left;
    }
    > *:nth-child(2) {
      text-align: right;
    }
  }
`;

const Footer = () => (
  <FooterEl>
    Foot
  </FooterEl>
);

export default Footer;
