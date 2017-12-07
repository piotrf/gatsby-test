import React from "react";
import { array, func, object, oneOfType, string } from "prop-types";

import { color } from "../../utils";

import { ButtonEl, GatsbyButtonEl } from "./ButtonEl";

const secondaryLinkButtonBase = props => `
  border-color: transparent;
  color: ${props.invert ? color.whiteD : color.blackM};
  &.active,
  &:active,
  &:hover {
    color: ${props.invert ? color.whiteD : color.blackD};
  }
  &:hover {
    border-color: currentColor;
  }
`;

const SecondaryLinkButtonEl = ButtonEl.extend`
  ${secondaryLinkButtonBase};
`;

const SecondaryLinkGatsbyButtonEl = GatsbyButtonEl.extend`
  ${secondaryLinkButtonBase};
`;

const SecondaryLinkButton = props =>
  props.to === null ? (
    <SecondaryLinkButtonEl
      onClick={props.handleClick}
      href={props.href}
      {...props}
    >
      {props.children}
    </SecondaryLinkButtonEl>
  ) : (
    <SecondaryLinkGatsbyButtonEl {...props} onClick={props.handleClick}>
      {props.children}
    </SecondaryLinkGatsbyButtonEl>
  );

SecondaryLinkButton.propTypes = {
  children: oneOfType([array, object, string]),
  handleClick: func,
  href: string,
  to: string
};

SecondaryLinkButton.defaultProps = {
  children: null,
  handleClick: null,
  href: "",
  to: null
};

export default SecondaryLinkButton;
