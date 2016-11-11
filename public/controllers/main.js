// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/propuestas', {
            templateUrl : 'pages/propuesta.html',
            controller  : 'propuestaController'
        })
        .when('/registro', {
            templateUrl : 'pages/registro.html',
            controller  : 'registroController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angularRoutingApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.message = 'Hola, Mundo!';
}]);

angularRoutingApp.controller('propuestaController', ['$scope', '$http', function($scope, $http) {
    $scope.addPropuesta = function(){
        //console.log($scope.propuesta);
        //call del route 
        //$http.get - .post .delete .put .push
        $http.post('/propuestas', $scope.propuesta).success(function(response){
            console.log(response);
            $scope.propuesta = "";
        });
    };
}]);

angularRoutingApp.controller('registroController', ['$scope', '$http', function($scope, $http) {
    $scope.message = 'Esta es la página de "registro"';
}]);