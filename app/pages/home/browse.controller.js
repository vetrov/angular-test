(function(){

    var mod = angular.module('home.browse', []);

    mod.controller("HomeBrowseController", ['$scope', '$http', 'ngDialog', 'charData', function($scope, $http, ngDialog, charData) {
        $scope.getChars = function (index) {
            charData.getChars().then(function (data) {
                $scope.chars = data.data;
            });
        };

        $scope.removeChar = function (index) {
            charData.removeChar(index);
            $scope.getChars();
        };

        $scope.openPopup = function (index) {
            ngDialog.open({
                template: '<p>Not yet implemented :(</p>',
                className: 'ngdialog-theme-default',
                plain: true
            });
        };

        $scope.getChars();
    }]);

})();
