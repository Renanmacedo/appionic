// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','idf.br-filters','ngCordova'])

.run(function($ionicPlatform, DataBaseValues) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    DataBaseValues.setup();
    DataBaseValues.bancoDados.transaction(function(transacao){
      let sql = 'CREATE TABLE IF NOT EXISTS perfil (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT'
                +  ',nome VARCHAR(50), email VARCHAR(100), data VARCHAR(40));'
      transacao.executeSql(sql, []);
    });
  });
})
