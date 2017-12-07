import React from "react";
import css from "styled-components";
import { array, bool, object, oneOfType, string } from "prop-types";

import { breakpoint, setSpace } from "../utils";

export const MainEl = css.main`
  ${setSpace("phl")};
  ${setSpace("pvh")};
  width: 100%;
  ${breakpoint.tablet} {
    ${setSpace("phh")};
    ${props =>
      !props.cover && props.pageHeight
        ? `
      padding-bottom: ${props.pageHeight / 5}px;
      padding-top: ${props.pageHeight / 5}px;
    `
        : null}
  }
    ${breakpoint.tablet} {
      display: flex;
      height: 100vh;
      overflow-y: auto;
    }
    & > div {
      margin: auto;
      width: 100%;
    }
`;

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = { pageHeight: null };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    const windowHeight = window.innerHeight;
    if (window.innerWidth >= 768) {
      return this.setState({
        pageHeight: windowHeight
      });
    }
    return this.setState({
      pageHeight: "auto"
    });
  }
  render() {
    return (
      <MainEl
        {...this.props}
        pageHeight={this.state.pageHeight}
        style={{
          minHeight: this.props.cover ? this.state.pageHeight : null
        }}
      >
        {this.props.cover ? (
          <div>{this.props.children}</div>
        ) : (
          this.props.children
        )}
      </MainEl>
    );
  }
}

Main.propTypes = {
  children: oneOfType([array, object, string]).isRequired,
  cover: bool,
  styles: string
};

Main.defaultProps = {
  cover: false,
  styles: null
};
