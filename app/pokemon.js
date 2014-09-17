var pokemonApp = angular.module('pokedex', []);

/*pokemonApp.factory('PokemonFactory', function($http) {
    return $http.get('http://poketest.googlecode.com/svn/trunk/pokemon.json');
});

pokemonApp.controller('PokemonCtrl', function ($scope, PokemonFactory){
    //$scope.pokemon = [{id: 1, name: "Bulbasaur"}];

        PokemonFactory.then(function(data){
            $scope.pokemon = data.mn;
        },
        function(error){
            alert("Pokemon data retrieval was not super effective. :(");
         });
}); */




pokemonApp.controller('PokemonController', function($scope, $http){
    $scope.pokemon = [];

    $http.get('pkmn.json')
        .success(function(results){
            $scope.pokemon = results;
//            alert("this worked");
        });

    //$scope.pokemon = [{num: 1}, {num: 2}, {num: 3}];
 //   alert("we got here");
});
