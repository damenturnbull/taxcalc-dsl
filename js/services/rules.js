app.factory('rules', function() {
  
  return [
    {
      ruleId:             1,
      minValue:           0,
      maxValue:           18200,
      valuePerDollarOver: 0.19
    }, 
    {
      ruleId:             2,
      minValue:           18201,
      maxValue:           37000,
      valuePerDollarOver: 0.325
    }, 
    {
      ruleId:             3,
      minValue:           37001,
      maxValue:           80000,
      valuePerDollarOver: 0.37
    }
  ];

});