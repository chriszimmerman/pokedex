var pokemonApp = angular.module('pokedex', []);

pokemonApp.controller('PokemonController', function($scope, $http){
    $scope.pokemon = [];

    $http.get('app/pkmn.json')
        .success(function(results){
            $scope.pokemon = results;
        })
		.failure(function(){
			alert('ruh roh');	
		});

});
