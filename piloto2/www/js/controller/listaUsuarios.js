angular.module('starter')
    .controller('listaUsuariosCtrl',function($scope, DataBaseValues){
        $scope.perfies = [];
        DataBaseValues.setup();
        DataBaseValues.bancoDados.transaction(function(transacao){
            let sql = "SELECT * FROM perfil";
            transacao.executeSql(sql, [], function(transacao,result){
                for(let i = 0; i < result.rows.length; i++){
                    $scope.perfies.push(result.rows[i]);
                }
            });
        });
    });