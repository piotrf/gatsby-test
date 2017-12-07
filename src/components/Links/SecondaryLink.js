import React from "react";
import { array, bool, func, object, oneOfType, string } from "prop-types";

import { color } from "../../utils";

import { LinkEl, GatsbyLinkEl } from "./Link";

const secondaryLinkBase = props => `
  color: ${props.invert ? color.whiteLD : color.blackM};
  &:hover {
    color: ${props.invert ? color.whiteBlk : color.blackD};
  }
`;

const SecondaryLinkEl = LinkEl.extend`
  ${secondaryLinkBase};
`;

const SecondaryGatsbyLinkEl = GatsbyLinkEl.extend`
  ${secondaryLinkBase};
`;

const SecondaryLink = props =>
  props.to === null ? (
    <SecondaryLinkEl {...props} onClick={props.handleClick} href={props.href}>
      {props.children}
    </SecondaryLinkEl>
  ) : (
    <SecondaryGatsbyLinkEl {...props} onClick={props.handleClick}>
      {props.children}
    </SecondaryGatsbyLinkEl>
  );

SecondaryLink.propTypes = {
  children: oneOfType([array, object, string]).isRequired,
  handleClick: func,
  href: string,
  invert: bool,
  target: string,
  to: string
};

SecondaryLink.defaultProps = {
  handleClick: null,
  href: "",
  invert: false,
  target: null,
  to: null
};

export default SecondaryLink;
