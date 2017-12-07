import React from "react";
import { array, func, object, oneOfType, string } from "prop-types";

import { color } from "../../utils";

import { ButtonEl, GatsbyButtonEl } from "./ButtonEl";

const secondaryButtonBase = props => `
  border-color: currentColor;
  color: ${props.invert ? color.whiteLD : color.blackM};
  &.active,
  &:active,
  &:hover {
    color: ${props.invert ? color.whiteBlk : color.blackD};
  }
`;

const SecondaryButtonEl = ButtonEl.extend`
  ${secondaryButtonBase};
`;

const SecondaryGatsbyButtonEl = GatsbyButtonEl.extend`
  ${secondaryButtonBase};
`;

const SecondaryButton = props =>
  props.to === null ? (
    <SecondaryButtonEl {...props} onClick={props.handleClick} href={props.href}>
      {props.children}
    </SecondaryButtonEl>
  ) : (
    <SecondaryGatsbyButtonEl {...props} onClick={props.handleClick}>
      {props.children}
    </SecondaryGatsbyButtonEl>
  );

SecondaryButton.propTypes = {
  children: oneOfType([array, object, string]),
  handleClick: func,
  href: string,
  to: string
};

SecondaryButton.defaultProps = {
  children: null,
  handleClick: null,
  href: "",
  to: null
};

export default SecondaryButton;
