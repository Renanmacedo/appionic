angular.module('starter')
    .controller('perfilCtrl',function($scope, $rootScope, $cordovaCamera){
       $scope.isEditado = false;
       $scope.usuario = $rootScope.usuario;
       $scope.editar = function(){
           if($scope.isEditado){
               $scope.isEditado=  false;
           }else{
               $scope.isEditado = true;
           }
       }
      $scope.tirarFoto = function(data) {
            var params = {
                quality: 50,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(params).then(function(foto){
                $scope.caminhoImagem = foto;
            },function(erro){
                console.log(erro);
            });                 
        }
    });