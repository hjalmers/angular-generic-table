import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  themes: {
    //default: "Swimbird - Dark",
    default: "Bootstrap",
    clearable: false,
    list: [
      //{ name: "Swimbird - Dark", class: "theme-sb-dark", color: "#00aced" },
      //{ name: "Swimbird - Light", class: "theme-sb-light", color: "#00aced" },
      {
        name: "Bootstrap",
        class: "theme-bootstrap",
        color: "var(--bs-primary)",
      },
    ],
    onChange: (theme) => {
      document.body.setAttribute("data-theme", theme.class);
    },
  },
};
