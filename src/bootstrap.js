const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
if (isBrowser) {
  if (!window.jquery) window.jquery = window.$ = require('jquery'); // eslint-disable-line global-require,no-multi-assign
  if (!window.bootstrap) window.bootstrap = require('bootstrap'); // eslint-disable-line global-require
}
