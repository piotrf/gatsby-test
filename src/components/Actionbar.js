import css from "styled-components";

import { breakpoint, setSpace } from "../utils";

const Actionbar = css.div`
  text-align: center;
  ${breakpoint.tablet} {
    text-align: inherit;
  }
  > * {
    ${setSpace("mhm")}
  }
  > *:first-child { ${setSpace("mln")} }
  > *:last-child { ${setSpace("mrn")} }
`;

export default Actionbar;
