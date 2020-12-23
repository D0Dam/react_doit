import { configure } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
function loadStories() {
  const context = require.context('../src/stories', true, /Story\.jsx$/);
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });
  //스토리 파일 추가
}

configure(loadStories, module);