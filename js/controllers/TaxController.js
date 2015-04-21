app.controller('TaxController', ['$scope', 'rules', function($scope, rules) {

  $scope.rules = rules;
  $scope.minValue = null;
  $scope.maxValue = null;

  $scope.getBaseValue = function(value) {
    return value;
  };

  $scope.addRule = function() {
    var rule = {
      ruleId:             $scope.ruleId_next, 
      minValue:           $scope.minValue, 
      maxValue:           $scope.maxValue, 
      valuePerDollarOver: $scope.valuePerDollarOver
    };

    $scope.rules.push(rule);
    // Reset next id
    $scope.minValue = $scope.maxValue = $scope.valuePerDollarOver = null;
    $scope.getNextMinValue();
    $scope.getNextId();
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
  $scope.getNextMinValue();
  $scope.getNextMaxValue();
}]);
