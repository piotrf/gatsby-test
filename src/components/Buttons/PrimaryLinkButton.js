import React from "react";
import { array, func, object, oneOfType, string } from "prop-types";

import { color } from "../../utils";

import { ButtonEl, GatsbyButtonEl } from "./ButtonEl";

const primaryLinkButtonBase = props => `
  border-color: transparent;
  color: ${props.invert ? color.whiteBlk : color.blackD};
  &.active,
  &:active,
  &:hover {
    color: ${props.invert ? color.white : color.blackBlk};
  }
  &:hover {
    border-color: currentColor;
  }
`;

const PrimaryLinkButtonEl = ButtonEl.extend`
  ${primaryLinkButtonBase};
`;

const PrimaryLinkGatsbyButtonEl = GatsbyButtonEl.extend`
  ${primaryLinkButtonBase};
`;

const PrimaryLinkButton = props =>
  props.to === null ? (
    <PrimaryLinkButtonEl
      {...props}
      onClick={props.handleClick}
      href={props.href}
    >
      {props.children}
    </PrimaryLinkButtonEl>
  ) : (
    <PrimaryLinkGatsbyButtonEl {...props} onClick={props.handleClick}>
      {props.children}
    </PrimaryLinkGatsbyButtonEl>
  );

PrimaryLinkButton.propTypes = {
  children: oneOfType([array, object, string]),
  handleClick: func,
  href: string,
  to: string
};

PrimaryLinkButton.defaultProps = {
  children: null,
  handleClick: null,
  href: "",
  to: null
};

export default PrimaryLinkButton;
