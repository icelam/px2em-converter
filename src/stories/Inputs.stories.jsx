import React, { useState } from 'react';
import { InputGroup } from '@components';

export default {
  title: 'Inputs'
};

export const InputGroupStory = () => {
  const [value, setValue] = useState('16');
  return (
    <InputGroup
      id="sample-input-group-1"
      label="Base font size"
      placeholder="e.g. 16"
      inputValue={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      autoComplete="off"
      maxLength="15"
    />
  );
};

InputGroupStory.story = {
  name: 'Input Group'
};

export const InputGroupWithErrorStory = () => {
  const [value, setValue] = useState('ABC');
  return (
    <InputGroup
      id="sample-input-group-1"
      label="Base font size"
      placeholder="e.g. 16"
      inputValue={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      autoComplete="off"
      maxLength="15"
    />
  );
};

InputGroupWithErrorStory.story = {
  name: 'Input Group with Error'
};
