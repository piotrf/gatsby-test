import { array, bool, object, oneOfType } from "prop-types";
import css from "styled-components";

import { breakpoint, color, setting } from "../utils";

const Page = css.div`
  ${props =>
    props.darken
      ? `
    background: ${color.blackBlk};
    & *::selection {
      background: ${color.whiteHL} !important;
    }
    &::-moz-selection,
    & *::-moz-selection {
      background: ${color.whiteHL} !important;
    }
  `
      : null}
  ${breakpoint.onlyphone} {
    padding-top: ${setting.topbarHeight.default};
  }
  ${breakpoint.tablet} {
    margin-left: ${setting.sidebarSize.tablet};
  }
  ${breakpoint.desktop} {
    margin-left: ${setting.sidebarSize.desktop};
  }
  ${breakpoint.hdesktop} {
    margin-left: ${setting.sidebarSize.hdesktop};
  }
`;

Page.propTypes = {
  children: oneOfType([array, object]).isRequired,
  darken: bool
};

Page.defaultProps = {
  darken: false
};

export default Page;
