angular.module('starter')
    .value('DataBaseValues',{
        bancoDados: null,
        setup: function(){
            this.bancoDados = window.openDatabase('listaCar','1.0','Banco de dados da aplicacao', 3000);
        }
    });