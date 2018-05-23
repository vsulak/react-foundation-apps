import React from 'react';
var Router = require('react-router');
var routes = require('./routes');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener('DOMContentLoaded', function () {
    Router.run(routes, Router.HistoryLocation, function (Handler) {
      React.render(<Handler/>, document.body);
    });
  });
}
