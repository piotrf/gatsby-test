import css from "styled-components";
import React from "react";
import { bool } from "prop-types";

import { breakpoint, color, time } from "../utils";

const LogoEl = css.h1`
  cursor: pointer;
  svg {
    display: inline-block;
    fill: ${props => (props.invert ? color.whiteBlk : color.blackBlk)};
    max-width: 3.5em;
    transition: fill ${time.s};
    ${breakpoint.tablet} {
      max-width: 5em;
    }
  }
`;

const Logo = props => (
  <LogoEl {...props}>
    <svg
      height="37"
      title="Piotr Fedorczyk"
      viewBox="0 0 208 37"
      width="208"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.85 17.875c2.2 0 3.783-.525 4.75-1.575.967-1.05 1.45-2.517 1.45-4.4 0-.833-.125-1.592-.375-2.275-.25-.683-.63-1.27-1.137-1.763-.51-.49-1.15-.87-1.925-1.137-.776-.267-1.696-.4-2.763-.4h-4.4v11.55h4.4zM12.85 0c2.567 0 4.77.304 6.612.912 1.842.61 3.36 1.446 4.55 2.513 1.192 1.067 2.07 2.325 2.638 3.775.567 1.45.85 3.017.85 4.7 0 1.817-.292 3.483-.875 5s-1.475 2.817-2.675 3.9c-1.2 1.083-2.72 1.93-4.563 2.537-1.84.61-4.02.913-6.537.913h-4.4v12.175H0V0h12.85zm165.725 6.5v9.225h12.45v6.525h-12.45v14.175h-8.5V0h23.45v6.5h-14.95zm19.875 26c0-.6.112-1.158.338-1.675.225-.517.533-.967.924-1.35.392-.383.855-.687 1.388-.913.533-.225 1.117-.337 1.75-.337.617 0 1.192.112 1.725.337.533.226 1 .53 1.4.913.4.383.712.833.938 1.35.225.517.337 1.075.337 1.675 0 .6-.112 1.162-.338 1.688-.225.525-.537.98-.937 1.362-.4.383-.867.683-1.4.9-.533.217-1.108.325-1.725.325-.633 0-1.217-.108-1.75-.325-.533-.217-.996-.517-1.387-.9-.392-.383-.7-.837-.925-1.362-.226-.526-.338-1.088-.338-1.688zM41 15.7h110.6v6.55H41V15.7z"
        fillRule="evenodd"
      />
    </svg>
  </LogoEl>
);

Logo.propTypes = {
  invert: bool
};

Logo.defaultProps = {
  invert: false
};

export default Logo;
