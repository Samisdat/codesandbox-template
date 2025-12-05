import * as React from "react";

import pkg from "@vodafone_de/brix-components/package.json";

const fontUrlFromCdn = `https://unpkg.com/@vodafone_de/brix-components@${pkg.version}/VodafoneVF.woff2`;

const css = `
@font-face {
  font-family: "VodafoneVariableFont";
  src: url("${fontUrlFromCdn}") format("woff2");
  font-weight: 100 900;
  font-style: normal;
}
:root {
  --vodafone-variable-font: "VodafoneVariableFont";
}
`;

const Font = () => <style>{css}</style>;

export default Font;
