import React from 'react';
import { Message } from '@components';

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
