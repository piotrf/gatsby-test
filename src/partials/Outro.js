import React from "react";
import css from "styled-components";

import { breakpoint, color, setSpace } from "../utils";

import Actionbar from "../components/Actionbar";
import Button from "../components/Buttons/Button";
import Container from "../components/Container";
import Copy from "../components/Copy";
import Footer from "./Footer";
import Separator from "../components/Separator";

const OutroEl = css.div`
  ${setSpace("phl")};
  ${setSpace("pvh")};
  background: ${color.white};
  ${breakpoint.tablet} {
    display: none;
  }
`;

const Outro = () => (
  <OutroEl>
    Outro
    <Footer />
  </OutroEl>
);

export default Outro;
