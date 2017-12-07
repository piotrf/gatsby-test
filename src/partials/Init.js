import React from "react";
import Helmet from "react-helmet";

import meta from "../meta";

import Favicon from "../assets/favicon.ico";

const Init = () => (
  <Helmet
    encodeSpecialCharacters
    meta={[
      { name: "description", content: meta.description },
      { name: "keywords", content: meta.keywords },
      { name: "viewport", content: meta.viewport }
    ]}
    defaultTitle={meta.title}
  >
    <html lang="en" />

    {/* Facebook OG */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />

    <link rel="icon" type="image/x-icon" href={Favicon} />
  </Helmet>
);

export default Init;
