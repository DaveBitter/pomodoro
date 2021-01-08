// Libs
import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import storybookTheme from './storybookTheme'

// Utils

// Styles
import '../src/styles/all.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: storybookTheme,
  },
});

configure(loadStories, module);
