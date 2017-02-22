(function() {
  'use strict';

  angular
    .module('shoppingListAngularjs')
    .controller('CarrinhoCompraController', CarrinhoCompraController);

  /** @ngInject */
  function CarrinhoCompraController($log, CarrinhoCompra, ItemCarrinhoCompra, Produto, totalizador) {
    var vm = this;
    vm.quantidades = [1,2,3,4,5];
    inicializar();

    function inicializar(){
      vm.carrinhoCompra = new CarrinhoCompra();
      salvarCarrinho();
      listarProdutos();
    }

    function listarProdutos(){
      Produto.query(function(result){
          vm.produtos = result;
      });
    }

    function salvarCarrinho(){
      CarrinhoCompra.save(vm.carrinhoCompra, function(result){
        vm.carrinhoCompra = result;
        vm.carrinhoCompra.itensCarrinhoCompra = [];
      });
    }

    vm.incluirNovoCarrinho = function(){
      CarrinhoCompra.delete({id: vm.carrinhoCompra.id}, function(){
        inicializar();
      });
    };

    vm.incluirNovoItem = function(produtoSelecionado){
      vm.itemCarrinhoCompra = new ItemCarrinhoCompra();
      vm.itemCarrinhoCompra.quantidade = 1;
      vm.itemCarrinhoCompra.produto = produtoSelecionado;
      vm.itemCarrinhoCompra.carrinhoCompra = vm.carrinhoCompra;
      salvarItem();

    };

    vm.alterarItem = function(itemSelecionado){
      itemSelecionado.$update( function(){
        vm.itemCarrinhoCompra = itemSelecionado;
        totalizador.atualizaTotais(itemSelecionado, vm.carrinhoCompra);
      });
    };

    vm.excluirItem = function(itemSelecionado){
      ItemCarrinhoCompra.delete( {id: itemSelecionado.id}, function(){
        var indiceItem = vm.carrinhoCompra.itensCarrinhoCompra.indexOf(itemSelecionado);
        vm.carrinhoCompra.itensCarrinhoCompra.splice(indiceItem, 1);
        totalizador.atualizarTotalCarrinho(vm.carrinhoCompra);
      });
    };

    function salvarItem(){
      ItemCarrinhoCompra.save(vm.itemCarrinhoCompra, function(result){
        vm.itemCarrinhoCompra = result;
        vm.carrinhoCompra.itensCarrinhoCompra.push(vm.itemCarrinhoCompra);
        totalizador.atualizaTotais(vm.itemCarrinhoCompra, vm.carrinhoCompra);
      });
    }
  }
})();
