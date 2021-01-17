import React from 'react';
import { storiesOf } from '@storybook/react';
import ReduxApp from '../r07/AdvReduxApp04';

storiesOf('ReduxApp', module)
	.addWithJSX('기본 스토어 설정', () => <ReduxApp />);