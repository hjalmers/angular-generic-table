import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
};

// workaround for https://github.com/nrwl/nx/issues/7054
import GlobalStyles from '!postcss-loader!sass-loader!./scss-loader.scss';
const storybookStyles = document.createElement('style');
storybookStyles.innerHTML = GlobalStyles;
document.body.appendChild(storybookStyles);
