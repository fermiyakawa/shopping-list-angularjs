(function() {
  'use strict';

  angular
    .module('shoppingListAngularjs')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/carrinho-compra/carrinho-compra.html',
        controller: 'CarrinhoCompraController',
        controllerAs: 'carrinhoCompraController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
