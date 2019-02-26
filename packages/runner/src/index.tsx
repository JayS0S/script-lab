import 'common/lib/polyfills';
import { invokeGlobalErrorHandler } from 'common/lib/utilities/splash.screen';
window.onerror = error => invokeGlobalErrorHandler(error);

import { redirectIfNeeded } from 'common/lib/utilities/environment.redirector';
const isRedirectingAwayPromise = redirectIfNeeded();

import './index.css';

///////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

import Pages from './pages';

(async () => {
  const isRedirectingAway = await isRedirectingAwayPromise;
  if (!isRedirectingAway) {
    try {
      ReactDOM.render(<Pages />, document.getElementById('root') as HTMLElement);
    } catch (e) {
      invokeGlobalErrorHandler(e);
    }
  }
})();
