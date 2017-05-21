angular.module('starter')
.controller('listaCtrl', function ($scope, CarroService, $http) {
    $scope.listaCarros = [];
    CarroService.obterCarros().then(function(dados) {
        dados.forEach(elements=>{
            var params ={
                nome: elements.nome,
                preco: elements.preco
            };
            $scope.listaCarros.push(params);
        })
    });
});