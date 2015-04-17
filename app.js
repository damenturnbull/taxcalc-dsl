(function() {
  var app = angular.module('taxRules', []);

  app.controller('TaxController', function($filter){
    this.rules = rules;

    this.getBaseValue = function(value) {
      return value;
    };

    this.addRule = function() {
      // console.log(this.rules);
      var rule = {
        ruleId:             this.ruleId_next, 
        minValue:           this.minValue, 
        maxValue:           this.maxValue, 
        valuePerDollarOver: this.valuePerDollarOver};

      this.rules.push(rule);
      // Reset next id
      this.ruleId_next = this.minValue = this.maxValue = this.valuePerDollarOver = null;
      this.getNextMinValue();
      this.getNextId();
    };

    this.getNextId = function() {
      this.ruleId_next = this.rules.length + 1;
    };

    this.getNextMinValue = function() {
      var last = this.rules[this.rules.length - 1];
      this.minValue = last.maxValue + 1;
    }

    this.getNextMinValue = function() {
      var last = this.rules[this.rules.length - 1];
      this.minValue = last.maxValue + 1;
      // this.minValue = $filter('currency')(last.maxValue + 1, '$', 0);
    }

    this.getNextMaxValue = function() {
      // this.maxValue = $filter('currency')(0, '$', 0);
    }

    // Initiate
    this.getNextId();
    this.getNextMinValue();
    this.getNextMaxValue();
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