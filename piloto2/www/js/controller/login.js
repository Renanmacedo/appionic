angular.module('starter')
    .controller('LoginCtrl',function($scope, $ionicPopup, $state, $rootScope){
    $scope.login = {};
    $scope.email = 'teste@teste.com';
    $scope.senha = 'teste123';
    $scope.realizarLogin = function(){
        var dadosLogin = {
            params: {
                email: $scope.login.email,
                senha: $scope.login.senha,
                nome: 'Teste',
                data:  '2017-05-02'
            }
        }
        if($scope.senha == dadosLogin.params.senha
            && $scope.email == dadosLogin.params.email){
                $rootScope.usuario = dadosLogin.params;
                $state.go("app.listagem");
        }else{
            $ionicPopup.alert({
                title: 'Ocorreu um erro',
                template:  'Senha ou Email incorretos'
            });
        }
    }

});