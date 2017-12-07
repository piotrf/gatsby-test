import React from "react";
import { array, bool, func, object, oneOfType, string } from "prop-types";

import { color } from "../../utils";

import { LinkEl, GatsbyLinkEl } from "./Link";

const primaryLinkBase = props => `
  color: ${props.invert ? color.whiteLD : color.blackHD};
  &:hover {
    color: ${props.invert ? color.white : color.blackBlk};
  }
`;

const PrimaryLinkEl = LinkEl.extend`
  ${primaryLinkBase};
`;

const PrimaryGatsbyLinkEl = GatsbyLinkEl.extend`
  ${primaryLinkBase};
`;

const PrimaryLink = props =>
  props.to === null ? (
    <PrimaryLinkEl {...props} onClick={props.handleClick} href={props.href}>
      {props.children}
    </PrimaryLinkEl>
  ) : (
    <PrimaryGatsbyLinkEl {...props} onClick={props.handleClick}>
      {props.children}
    </PrimaryGatsbyLinkEl>
  );

PrimaryLink.propTypes = {
  children: oneOfType([array, object, string]).isRequired,
  handleClick: func,
  href: string,
  invert: bool,
  target: string,
  to: string
};

PrimaryLink.defaultProps = {
  handleClick: null,
  href: "",
  invert: false,
  target: null,
  to: null
};

export default PrimaryLink;
