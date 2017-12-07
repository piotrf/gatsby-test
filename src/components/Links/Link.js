import css from "styled-components";
import Link from "gatsby-link";

const linkBaseStyles = `
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-decoration: underline;
  white-space: nowrap;
`;

const LinkEl = css.a`
  ${linkBaseStyles}
`;

const GatsbyLinkEl = css(Link)`
  ${linkBaseStyles}
`;

export { LinkEl, GatsbyLinkEl };
