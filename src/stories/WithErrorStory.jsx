import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../r04/InputWithStyle';
import withError from '../r05/withError';

const InputWithError = withError('올바르지 못한 값입니다')(Input);

storiesOf('WithError', module)
  .addWithJSX('기본 설정', () => (
    <InputWithError name="name" hasError />
  ))
  .addWithJSX('errorMessage 예제', () => (
    <InputWithError name="name" hasError errorMessage="필수 항목입니다."/>
  ));