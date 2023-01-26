import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

setCompodocJson(docJson);

const menuOrder = {
  introduction: 0,
  "concepts-api-sorting": 1,
  examples: 2,
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  options: {
    storySort: {
      includeName: false,
      order: [
        "Introduction",
        "Examples",
        [
          "Basic",
          "Sorting",
          "Nested data",
          "Row click & hover",
          "Pagination",
          "Custom templates",
          "Table footer",
          "Horizontal layout",
          "Transpose data",
          "Mobile layout",
        ],
      ],
      //order: (a, b) => console.log(a, b),
    },
    //(a, b) =>
    //menuOrder[a[1].componentId] < menuOrder[b[1].componentId] ? -1 : 1,
  },
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
