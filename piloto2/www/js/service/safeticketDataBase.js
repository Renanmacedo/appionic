angular.module('starter').service('DataBaseSql',function($cordovaSQLite){
    var db = null;
    this.createDataBase = function(){
      db = $cordovaSQLite.openDB('safeticket.db');
      let query =  "CREATE TABLE IF NOT EXISTS comissarios (id integer primary key, nome varchar(100), grupo varchar(100))";
      $cordovaSQLite.execute(db, query)
    };
});