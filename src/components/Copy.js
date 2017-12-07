import { array, object, oneOfType, string } from "prop-types";
import css from "styled-components";

import { breakpoint, color, styleText } from "../utils";

const Copy = css.div`
  color: ${props => (props.invert ? color.whiteM : `inherit`)};
  em,
  .h1, .h2, .h3, .h4, .h6 {
    color: ${props => (props.invert ? color.whiteLD : color.blackLD)};
    .invert {
      color: ${color.whiteLD};
    }
  }
  ${props =>
    props.limit
      ? `
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
    ${breakpoint.desktop} {
      width: ${100 / 5 * 4}%;
      margin-left: initial;
      margin-right: initial;
      max-width: 620px;
    }
    ${breakpoint.hdesktop} {
      width: ${100 / 4 * 3}%;
    }
    `
      : null}
  ${breakpoint.onlyphone} {
    text-align: center;
  }

  .h1 {
    ${styleText.h1};
    color: ${props => (props.invert ? color.whiteBlk : color.blackLD)};
    &.invert {
      color: ${color.whiteBlk};
    }
  }
  .h2 {
    ${styleText.h2};
    color: ${props => (props.invert ? color.whiteBlk : color.blackLD)};
    &.invert {
      color: ${color.whiteBlk};
    }
  }
  .h3 {
    ${styleText.h3};
  }
  .h4 {
    ${styleText.h4};
  }
  .h5 {
    ${styleText.h5};
    color: ${props => (props.invert ? color.whiteLLt : `inherit`)};
    &.invert {
      color: ${color.whiteBlk};
    }
  }
  .h6 {
    ${styleText.h6};
  }


  .txt1, .txt2, .txt3 {
    &:invert {
    }
  }

  .txt1 {
    ${styleText.txt1}
    color: ${props => (props.invert ? color.whiteLD : color.blackLD)};
    &.invert {
      color: ${color.whiteLD};
    }
  }
  .txt2 {
    ${styleText.txt2}
  }
  .txt3 {
    ${styleText.txt3}
  }
  .txt3 {
    ${styleText.txt3}
  }
  .txt4 {
    ${styleText.txt4}
  }
  .txt4 {
    ${styleText.txt4}
  }
`;

Copy.propTypes = {
  align: string,
  children: oneOfType([array, object, string]).isRequired
};

Copy.defaultProps = {
  align: "left"
};

export default Copy;
