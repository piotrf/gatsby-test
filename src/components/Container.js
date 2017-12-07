import { array, object, oneOfType, string } from "prop-types";
import css from "styled-components";

import { breakpoint } from "../utils";

const Container = css.div`
  margin: 0 auto;
  width: 100%;
  ${breakpoint.tablet} {
    max-width: 600px;
  }
  ${breakpoint.desktop} {
    max-width: 900px;
  }
  ${breakpoint.hdesktop} {
    max-width: 1200px;
  }
  ${props =>
    props.flex
      ? `
    display: flex;
    > * {
      flex-basis: ${100 / props.flex}%;
    }
  `
      : null}
`;

Container.propTypes = {
  children: oneOfType([array, object, string]).isRequired
};

export default Container;
