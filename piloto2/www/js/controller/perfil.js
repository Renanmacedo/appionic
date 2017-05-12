angular.module('starter')
    .controller('perfilCtrl',function($scope, $rootScope, $cordovaCamera,DataBaseValues){
       $scope.isEditado = false;
       $scope.usuario = $rootScope.usuario;
       $scope.editar = function(){
           if($scope.isEditado){
               $scope.isEditado=  false;
           }else{
               $scope.isEditado = true;
           }
       }
       $scope.salvar = function(){
            $scope.insert();
       }
       $scope.insert = function(){
           var params = {
               nome: $scope.usuario.nome,
               email: $scope.usuario.email,
               data: $scope.usuario.data
           };
           DataBaseValues.setup();
           DataBaseValues.bancoDados.transaction(function(transacao){
               let sql = "INSERT INTO perfil (nome, email, data) VALUES (?,?,?)";
               transacao.executeSql(sql, [params.nome, params.email, params.data]);
           })
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