(function(){

    var mod = angular.module('home.chardata', []);

    mod.factory('charData', function ($q, $http) {
        var charDataService = {};

        charDataService.chars = [];

        charDataService.getChars = function () {
            var promise = $q.when({data: charDataService.chars});
            if (!charDataService.chars.length) {
                promise = $http
                    .get('/data/characters.json')
                    .success(function (data) {
                        charDataService.chars = data;
                    });
            }
            return promise;
        };

        charDataService.addChar = function (char) {
            charDataService.chars.push(char);
        };

        charDataService.removeChar = function (index) {
            charDataService.chars.splice(index, 1);
        };

        return charDataService;
    })



})();
