import React, { useState, useMemo } from 'react';
import { Switch } from '@components';

export default {
  title: 'Switches'
};

export const SwitchStory = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState(2);

  const options1 = useMemo(() => [
    { label: 'em', value: 'em' },
    { label: 'rem', value: 'rem' }
  ], []);

  const options2 = useMemo(() => [
    { label: 'True', value: true },
    { label: 'False', value: false }
  ], []);

  const options3 = useMemo(() => [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 }
  ], []);

  return (
    <>
      <Switch onChange={setValue1} value={value1} options={options1} label="Unit: " />
      <Switch onChange={setValue2} value={value2} options={options2} />
      <Switch onChange={setValue3} value={value3} options={options3} buttonWidth="5rem" />
    </>
  );
};

SwitchStory.story = {
  name: 'Switch'
};
