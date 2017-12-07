import React from "react";
import Helmet from "react-helmet";

import meta from "../meta";

import Actionbar from "../components/Actionbar";
import Button from "../components/Buttons/Button";
import Container from "../components/Container";
import Copy from "../components/Copy";
import Main from "../components/Main";
import Outro from "../partials/Outro";
import Page from "../components/Page";
import Separator from "../components/Separator";

import WithAnimation from "../components/wAnimation";

const HomePage = () => [
  <Helmet title={`Welcome — ${meta.title}`} key="helmet" />,
  <Page key="page">
    <Main cover>
      <Container>
        <Copy limit>
          <WithAnimation>
            <span className="h5 invert">Intro</span>
          </WithAnimation>
          <Separator size="x" silent />
          <WithAnimation delay={150}>
            <h1 className="h1">
              Title
            </h1>
          </WithAnimation>
          <Separator size="m" silent />
          <WithAnimation delay={300}>
            <p className="txt1">
              Para
            </p>
          </WithAnimation>
          <Separator size="s" silent />
          <WithAnimation delay={450}>
            <p className="txt2">
              Para
            </p>
          </WithAnimation>
        </Copy>
        <Separator size="m" silent />
        <WithAnimation delay={600}>
          <Actionbar>
            <Button primary to="/" href="/">
              Bttn
            </Button>
          </Actionbar>
        </WithAnimation>
      </Container>
    </Main>
    <Outro />
  </Page>
];

export default HomePage;
