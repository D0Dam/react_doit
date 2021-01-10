import React from 'react';
import { storiesOf } from '@storybook/react';

import { CounterWithCountState } from '../r05/withState';

storiesOf('withState', module)
	.addWithJSX('CounterWithCountState', () => <CounterWithCountState />);