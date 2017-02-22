(function() {
  'use strict';

  angular.module('shoppingListAngularjs').factory('CarrinhoCompra', function($resource) {
    return $resource('http://localhost:8080/shoppinglist/resources/carrinhoCompra/:id', {id: "@id"});
  });

  angular.module('shoppingListAngularjs').factory('Produto', function($resource) {
    return $resource('http://localhost:8080/shoppinglist/resources/produto/:id', {id: "@id"});
  });

  angular.module('shoppingListAngularjs').factory('ItemCarrinhoCompra', function($resource) {
    return $resource('http://localhost:8080/shoppinglist/resources/itemCarrinhoCompra/:id', {id: "@id"}, {
        update: {
          method:'PUT'
        }
    });
  });

})();
