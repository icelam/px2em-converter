/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Notification from 'rc-notification';
import Providers from '@providers';
import Message from './Message';

let notificationInstance = null;

const createNotificationInstance = () => {
  Notification.newInstance({
    prefixCls: 'message-notification',
    style: {
      position: 'fixed',
      bottom: '3.75rem',
      left: '0',
      width: '100%',
      pointerEvents: 'none',
      textAlign: 'center'
    },
    transitionName: 'move-up', // animations can be edited at `styles/global.js`
    maxCount: 3
  }, (notification) => {
    notificationInstance = notification;
  });
};

const displayMessage = (text, options) => {
  const {
    duration, type
  } = options;
  !notificationInstance && createNotificationInstance();

  notificationInstance.notice({
    content: <Providers><Message type={type} message={text} /></Providers>,
    duration: duration || 3
    // onClose() {
    //   callback && callback();
    // }
  });
};

const message = {
  success: (text, duration) => displayMessage(text, {
    duration,
    type: 'success'
  }),
  warn: (text, duration) => displayMessage(text, {
    duration,
    type: 'warn'
  }),
  info: (text, duration) => displayMessage(text, {
    duration,
    type: 'info'
  }),
  error: (text, duration) => displayMessage(text, {
    duration,
    type: 'error'
  }),
  loading: (text, duration) => displayMessage(text, {
    duration,
    type: 'loading'
  })
};

export { default as Message } from './Message';
export default message;
