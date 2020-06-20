import React from 'react';
import { Button, Message, message } from '@components';

export default {
  title: 'Message'
};

export const SuccessMessageStory = () => <Message type="success" message="Success" />;

SuccessMessageStory.story = {
  name: 'Success Message'
};

export const WarnMessageStory = () => <Message type="warn" message="Warn" />;

WarnMessageStory.story = {
  name: 'Warn Message'
};

export const InfoMessageStory = () => <Message type="info" message="Info" />;

InfoMessageStory.story = {
  name: 'Info Message'
};

export const ErrorMessageStory = () => <Message type="error" message="Error" />;

ErrorMessageStory.story = {
  name: 'Error Message'
};

export const LoadingMessageStory = () => <Message type="loading" message="Loading" />;

LoadingMessageStory.story = {
  name: 'Loading Message'
};

export const TriggerMessageStory = () => (
  <>
    <Button onClick={() => message.success('Success!')}>Triggger a success message</Button><br />
    <Button onClick={() => message.warn('Warning!')}>Triggger a warning message</Button><br />
    <Button onClick={() => message.info('Info!')}>Triggger a info message</Button><br />
    <Button onClick={() => message.success('Error!')}>Triggger a error message</Button><br />
    <Button onClick={() => message.success('Loading!')}>Triggger a loading message</Button>
  </>
);

TriggerMessageStory.story = {
  name: 'Trigger Messages'
};
