import { font } from "../config/fonts";
import { setType } from "../mixins/setType";
import { track } from "../config/tracking";

export const styleText = {
  h1: `
    ${setType("h")};
    display: block;
    font-family: ${font.mono};
    font-weight: 500;
    letter-spacing: -${track.x};
    word-spacing: -${track.m};
  `,
  h2: `
    ${setType("l")};
    display: block;
    font-family: ${font.mono};
    font-weight: 500;
    word-spacing: -${track.x};
  `,
  h3: `
    ${setType("l")};
    display: block;
    font-family: ${font.pri};
    letter-spacing: ${track.x};
  `,
  h4: `
    ${setType("m")};
    display: block;
    font-family: ${font.mono};
    font-weight: 500;
    letter-spacing: -${track.x};
  `,
  h5: `
    ${setType("s")};
    display: block;
    font-family: ${font.pri};
    letter-spacing: ${track.h};
    text-transform: uppercase;
  `,
  h6: `
    ${setType("x")};
    font-family: ${font.mono};
    letter-spacing: ${track.m};
    opacity: .755;
    text-transform: uppercase;
  `,
  txt1: `
    ${setType("l")};
    font-family: ${font.pri};
    letter-spacing: ${track.x};
    font-weight: 400;
  `,
  txt2: `
    ${setType("m")};
    font-family: ${font.pri};
    letter-spacing: ${track.x};
    font-weight: 400;
  `,
  txt3: `
    ${setType("s")};
    font-family: ${font.pri};
    letter-spacing: ${track.x};
    font-weight: 400;
  `,
  txt4: `
    ${setType("x")};
    font-family: ${font.pri};
    letter-spacing: ${track.x};
  `,
  link: `
    text-decoration: underline;
  `,
  code: `
    ${setType("x")};
    font-family: ${font.mono};
    font-weight: 400;
  `
};

export default styleText;
