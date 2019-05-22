angular.module("myApp", [])
.controller("myfirstController", [ '$scope', function ($scope){
    console.log("This is fore controller");
    $scope.hello = "hello world";
    $scope.AddNumbers = function() {
        var a = Number($scope.a || 0);
        var b = Number($scope.b || 0);
        $scope.sum = a+b;
    }
}]);
