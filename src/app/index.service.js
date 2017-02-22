(function() {
  'use strict';

  angular.module('shoppingListAngularjs').service('totalizador', function() {
    var vm = this;

    vm.atualizarTotalItem = function(itemCarrinhoCompra){
      itemCarrinhoCompra.total = itemCarrinhoCompra.quantidade * itemCarrinhoCompra.produto.preco;
    }

    vm.atualizarTotalCarrinho = function(carrinhoCompra){
      carrinhoCompra.total = 0;
      for (var i=0; i<carrinhoCompra.itensCarrinhoCompra.length; i++){
        var itemCarrinho = carrinhoCompra.itensCarrinhoCompra[i];
        carrinhoCompra.total += itemCarrinho.total;
      }
    }

    vm.atualizaTotais = function(itemCarrinhoCompra, carrinhoCompra){
      this.atualizarTotalItem(itemCarrinhoCompra);
      this.atualizarTotalCarrinho(carrinhoCompra);
    }

  });

})();
