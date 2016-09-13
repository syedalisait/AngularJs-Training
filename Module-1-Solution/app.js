(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ["$scope"];

function LunchCheckController($scope) {

  $scope.name = "";
  $scope.CheckLunch = function () {
    var name = $scope.name.trim();

    if(!name) {
      $scope.result = "Please enter data first";
      // Changing text color and border color to red (Additional task)
      $scope.class = "red";
    }
    else {
      // Split items present in the input field based on comma
      // and store in reg array
      var reg = name.split(",");
      // count variable to check no. of valid items
      var count = 0;

      // If the item starts with a space and consists of only space
      // or if the item has nothing at all(empty), then we ignore the item
      // by not counting it. (Additional tasks given by Yaakov)
      for(var i = 0; i < reg.length; i++) {
        // Using Regex to find invalid items (spaces and empty)
        if (reg[i].match(/^\s*$/)) {
          continue;
        }
        //Counting Valid Items
        else {
          count++;
        }
      }

    if (count <= 3) {
      $scope.result = "Enjoy!";
    }
    else {
      $scope.result = "Too much!";
    }
    // Addtional task where Enjoy and Too Much will show up in green color
    // and the textbox color will turn to green
    $scope.class = "green";
  }
};


}



})();
