import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePageComponent from '../r06/HomePageComponent';
import HomePageWithProvider from '../r06/HomePageWithProvider';
import HomePageWithTwoProvider from '../r06/HomePageWithTwoProvider';

storiesOf('HomePageComponent', module)
  .addWithJSX('컨텍스트 예제', () => <HomePageComponent />)
  .addWithJSX('Provider 예제', () => <HomePageWithProvider />)
	.addWithJSX('이중 Provider 예제', () => <HomePageWithTwoProvider />);