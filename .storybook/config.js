import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/sass/materialize.scss';

function loadStories() {
  const context = require.context('../src/stories', true, /Story\.jsx$/);
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });
  //스토리 파일 추가
}

setAddon(JSXAddon);
configure(loadStories, module);