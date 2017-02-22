(function() {
  'use strict';

  angular
    .module('shoppingListAngularjs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
