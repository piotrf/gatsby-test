import css from "styled-components";
import Link from "gatsby-link";

import { font, time, setType } from "../../utils";

const buttonBaseStyles = `
  ${setType("x")};
  border-style: solid;
  border-width: 0 0 2px 0;
  cursor: pointer;
  display: inline-block;
  font-family: ${font.pri};
  font-weight: 700;
  letter-spacing: .1em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: border-color ${time.s}, color ${time.s};
  white-space: nowrap;
`;

const ButtonEl = css.a`
  ${buttonBaseStyles}
`;

const GatsbyButtonEl = css(Link)`
  ${buttonBaseStyles}
`;

export { ButtonEl, GatsbyButtonEl };
