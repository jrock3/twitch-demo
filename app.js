(function() {
  
var app = angular.module('twitchApp', []);
  
app.controller('TwitchCtrl', function($scope, $http) {

var check = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin"];   
$scope.list = [];
$scope.status = "Status";

angular.forEach(check, function(val) {
  $scope.list.push(val);
}); //end of forEach

}); /*end of controller*/

})();