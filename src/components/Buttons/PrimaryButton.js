import React from "react";
import { array, func, object, oneOfType, string } from "prop-types";

import { color } from "../../utils";

import { ButtonEl, GatsbyButtonEl } from "./ButtonEl";

const primaryButtonBase = props => `
  border-color: currentColor;
  color: ${props.invert ? color.whiteBlk : color.blackD};
  &.active,
  &:active,
  &:hover {
    color: ${props.invert ? color.white : color.blackBlk};
  }
`;

const PrimaryButtonEl = ButtonEl.extend`
  ${primaryButtonBase};
`;
const PrimaryGatsbyButtonEl = GatsbyButtonEl.extend`
  ${primaryButtonBase};
`;

const PrimaryButton = props =>
  props.to === null ? (
    <PrimaryButtonEl {...props} onClick={props.handleClick} href={props.href}>
      {props.children}
    </PrimaryButtonEl>
  ) : (
    <PrimaryGatsbyButtonEl {...props} onClick={props.handleClick}>
      {props.children}
    </PrimaryGatsbyButtonEl>
  );

PrimaryButton.propTypes = {
  children: oneOfType([array, object, string]),
  handleClick: func,
  href: string,
  to: string
};

PrimaryButton.defaultProps = {
  children: null,
  handleClick: null,
  href: "",
  to: null
};

export default PrimaryButton;
