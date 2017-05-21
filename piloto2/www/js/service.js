angular.module('starter')
    .service('CarroService',function($http){
        let url = 'https://aluracar.herokuapp.com/';
        return {
            obterCarros: function(){
               return  $http.get(url).then(function(data){
                   console.log(data);
                    return data.data;
                });
            },
            salvarPedido: function(pedido){
                
                return $http.post(url + 'salvarpedido', pedido)
                    .then(function(response){
                        return "Deu certo";
                    });
            }
        };
    });