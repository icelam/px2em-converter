import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@components';

export default {
  title: 'Buttons'
};

export const ButtonStory = () => (
  <>
    <Button onClick={action('Clicked')}>Normal Button</Button><br />
    <Button onClick={action('Clicked')} disabled> Disabled Button</Button>
  </>
);

ButtonStory.story = {
  name: 'Button'
};
