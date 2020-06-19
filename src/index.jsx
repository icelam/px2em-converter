/* eslint "import/no-extraneous-dependencies": ["error", {"optionalDependencies": false} ] */
import 'core-js/stable';
import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';
import 'intl';

import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/App';
import '@styles/font-face.css';

import * as serviceWorker from '@/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
