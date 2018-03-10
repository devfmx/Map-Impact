(function(){
  'use strict';

  angular
    .module("mapamexico", [])
    .directive("mapaMexico", mapaMexico);

  function mapaMexico(){
      var directive = {
        restrict: 'EA',
        templateUrl: '/mapamexico.html',
        controller:   mexicoController,
        controllerAs: 'mexico',
        replace : true
      };
      return directive;
  }

  mexicoController.$inject= ["$scope"];

  function mexicoController($scope){
    var mexico = this;
    mexico.over = null;

    // Estilos del mapa
    var initialcolor = "#CCCCCC";
    var overcolor =  "#89164E";
    var borderColor = "#000";
    var paths = d3.selectAll("path");
    paths.style("fill", initialcolor);
    paths.style("stroke", borderColor);


    paths.on('mouseover', function(){
      console.log(this.id);
      mexico.over = this.id;
      d3.select(this).style("fill", overcolor);
      $scope.$apply();
    });


    paths.on('mouseout', function(){
      d3.select(this).style("fill",initialcolor);
    });

  }

})();