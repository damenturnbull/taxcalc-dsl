(function() {
  var app = angular.module('taxRules', []);

  app.controller('TaxController', function(){
    this.rules = rules;
  });

  var rules = [{
    ruleId:   1,
    minValue: 0,
    maxValue: 18200
  }, {
    ruleId:   2,
    minValue: 18201,
    maxValue: 37000
  }, {
    ruleId:   3,
    minValue: 37001,
    maxValue: 80000
  }];

})();
