import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageWithLoadData} from '../r05/lifecycle';

storiesOf('Lifecycle', module)
  .addWithJSX('loadData 예제', () => (
    <PageWithLoadData loadData={() => fetch('/').then(() => 'hello')} />
  ));