describe('TaxController', function() {
  beforeEach(module('TaxRules'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Rules', function() {
    it("should be defined", function() {
      // var $scope = {};
      // var controller = $controller('TaxController', { $scope: $scope });
      // expect($scope.rules).toBeDefined();
    });    
  });
});