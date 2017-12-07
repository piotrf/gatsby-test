import React from "react";
import PropTypes from "prop-types";
import css from "styled-components";

import { setType, setSpace } from "../../utils";

const IconicButtonEl = css.a`
  ${setType("s")};
  ${setSpace("pax")};
  text-decoration: none;
  > i {
    position: relative;
    bottom: -0.1em;
  }
`;

const IconicButton = props => (
  <IconicButtonEl
    href={props.href}
    onClick={props.handleClick}
    target={props.target}
  >
    <i className={`icon--${props.icon}`} />
  </IconicButtonEl>
);

IconicButton.propTypes = {
  handleClick: PropTypes.func,
  href: PropTypes.string,
  icon: PropTypes.string,
  target: PropTypes.string
};

IconicButton.defaultProps = {
  handleClick: null,
  href: "",
  icon: "",
  target: ""
};

export default IconicButton;
