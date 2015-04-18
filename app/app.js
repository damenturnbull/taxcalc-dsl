(function() {

  angular.module('taxRules', ['ngMock'])
  .controller('TaxController', function TaxController($scope){
    $scope.rules = rules;

    $scope.getBaseValue = function(value) {
      return value;
    };

    $scope.addRule = function() {
      // console.log($scope.rules);
      var rule = {
        ruleId:             $scope.ruleId_next, 
        minValue:           $scope.minValue, 
        maxValue:           $scope.maxValue, 
        valuePerDollarOver: $scope.valuePerDollarOver};

      $scope.rules.push(rule);
      // Reset next id
      $scope.ruleId_next = $scope.minValue = $scope.maxValue = $scope.valuePerDollarOver = null;
      $scope.getNextMinValue();
      $scope.getNextId();
    };

    $scope.getNextId = function() {
      $scope.ruleId_next = $scope.rules.length + 1;
    };

    $scope.getNextMinValue = function() {
      var last = $scope.rules[$scope.rules.length - 1];
      $scope.minValue = last.maxValue + 1;
    }

    $scope.getNextMinValue = function() {
      var last = $scope.rules[$scope.rules.length - 1];
      $scope.minValue = last.maxValue + 1;
      // $scope.minValue = $filter('currency')(last.maxValue + 1, '$', 0);
    }

    $scope.getNextMaxValue = function() {
      // $scope.maxValue = $filter('currency')(0, '$', 0);
    }

    // Initiate
    $scope.getNextId();
    $scope.getNextMinValue();
    $scope.getNextMaxValue();
  });

  var rules = [{
    ruleId:             1,
    minValue:           0,
    maxValue:           18200,
    valuePerDollarOver: 0.19
  }, {
    ruleId:             2,
    minValue:           18201,
    maxValue:           37000,
    valuePerDollarOver: 0.325
  }, {
    ruleId:             3,
    minValue:           37001,
    maxValue:           80000,
    valuePerDollarOver: 0.37
  }];

})();


// angular.module('app', ['ngMock'])
// .controller('PasswordController', function PasswordController($scope) {
//   $scope.password = '';
//   $scope.grade = function() {
//     var size = $scope.password.length;
//     if (size > 8) {
//       $scope.strength = 'strong';
//     } else if (size > 3) {
//       $scope.strength = 'medium';
//     } else {
//       $scope.strength = 'weak';
//     }
//   };
// });