// import scss using scss-loader file
import "!style-loader!css-loader!postcss-loader!sass-loader!./manager.scss";

// set default theme
document.body.setAttribute("data-theme", "theme-bootstrap");

import { addons } from "@storybook/addons";
import theme from "./theme";

addons.setConfig({
  theme,
});
