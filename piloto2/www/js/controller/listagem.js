angular.module('starter')
.controller('listaCtrl', function ($scope, $ionicSideMenuDelegate, CarroService, $http) {
    CarroService.obterCarros().then(function (dados) {
        $scope.listaCarros = dados;
    });
    $scope.showHide = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
});