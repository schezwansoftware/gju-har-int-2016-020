'use strict';

import angular from 'angular';

export default angular.module('gjuHarInt2016020App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
