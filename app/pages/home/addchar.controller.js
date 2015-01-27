(function(){

    var mod = angular.module('home.addchar', []);

    mod.controller('HomeAddCharController', ['$scope', 'charData', function($scope, charData) {

        $scope.char = {};

        $scope.addChar = function () {
            var char = $scope.char;
            if (char.name && char.race && char.homeworld && char.image_url) {
                charData.addChar(char);
                alert('Character added!');
                $scope.char = {};
            } else {
                alert('Please fill all fields!');
            }
        }

    }]);

})();
