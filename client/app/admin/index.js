'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('gjuHarInt2016020App.admin', ['gjuHarInt2016020App.auth', 'ui.router'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
