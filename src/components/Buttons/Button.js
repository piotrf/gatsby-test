import React from "react";
import { bool, oneOfType, array, object, string, func } from "prop-types";

import PrimaryButton from "./PrimaryButton";
import PrimaryLinkButton from "./PrimaryLinkButton";
import SecondaryButton from "./SecondaryButton";
import SecondaryLinkButton from "./SecondaryLinkButton";
import withObfuscation from "./withObfuscation";

const ObfPrimaryButton = withObfuscation(PrimaryButton);
const ObfPrimaryLinkButton = withObfuscation(PrimaryLinkButton);
const ObfSecondaryButton = withObfuscation(SecondaryButton);
const ObfSecondaryLinkButton = withObfuscation(SecondaryLinkButton);

const Button = props => {
  const {
    obfuscated,
    primary,
    primaryLink,
    secondary
    // secondaryLink
  } = props;
  if (obfuscated) {
    if (primary) {
      return <ObfPrimaryButton {...props} />;
    }
    if (primaryLink) {
      return <ObfPrimaryLinkButton {...props} />;
    }
    if (secondary) {
      return <ObfSecondaryButton {...props} />;
    }
    return <ObfSecondaryLinkButton {...props} />;
  }
  if (primary) {
    return <PrimaryButton {...props} />;
  } else if (secondary) {
    return <SecondaryButton {...props} />;
  } else if (primaryLink) {
    return <PrimaryLinkButton {...props} />;
  }
  return <SecondaryLinkButton {...props} />;
};

Button.propTypes = {
  children: oneOfType([array, object, string]),
  handleClick: func,
  href: string,
  obfuscated: bool,
  primary: bool,
  primaryLink: bool,
  secondary: bool,
  secondaryLink: bool
};

Button.defaultProps = {
  children: null,
  handleClick: null,
  href: null,
  obfuscated: false,
  primary: false,
  primaryLink: false,
  secondary: false,
  secondaryLink: false
};

export default Button;
