const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
if (isBrowser) {
  if (!window.jquery) window.jquery = window.$ = require('jquery'); // eslint-disable-line global-require,no-multi-assign
  if (!window.bootstrap) window.bootstrap = require('bootstrap'); // eslint-disable-line global-require

  window.$(`<style type="text/css">
.input-group>.input-group-prepend .rd-button.btn{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
.input-group>.input-group-append .rd-button.btn{
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>`).appendTo(window.$('head'));
}
