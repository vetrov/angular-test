describe('home.browse module', function() {

    describe('HomeBrowseController', function() {

        var scope, ctrl, $httpBackend;

        beforeEach(module('charsApp'));
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend
                .expectGET('/data/characters.json')
                .respond([{
                    "name": "Data",
                    "race": "Android",
                    "homeworld": "Omicron Theta",
                    "image_url": "img/data.png"
                }, {
                    "name": "William T. Riker",
                    "race": "Human",
                    "homeworld": "Earth",
                    "image_url": "img/riker.png"
                }]);

            scope = $rootScope.$new();
            ctrl = $controller('HomeBrowseController', {$scope: scope});
        }));

        it('should create view with 2 characters', inject(function($controller) {
            $httpBackend.flush();
            expect(scope.chars.length).toBe(2);
        }));

        it('should have 1 character after deleting 1', inject(function($controller) {
            $httpBackend.flush();
            scope.removeChar(1);
            expect(scope.chars.length).toBe(1);
        }));

    });

});
