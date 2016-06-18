(function() {
  
var app = angular.module('twitchApp', []);
  
app.controller('TwitchCtrl', ['$http', '$scope', function($http, $scope) {

var check = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin", "ESL_SC2"];   
$scope.list = [];
$scope.status = "Status";

check.forEach(function(val) {
  $http.jsonp('https://api.twitch.tv/kraken/channels/' + val + '?callback=JSON_CALLBACK').success(function(channelData) {
        $http.jsonp('https://api.twitch.tv/kraken/streams/' + val + '?callback=JSON_CALLBACK').success(function(streamData) {
          
        var obj = {name: val};
        if (streamData.stream === null) {
        obj.status = "offline";
      } else if (streamData.stream === undefined) {
        obj.status = "no account";
      } else {
        obj.status = "ONLINE";
      };
        obj.logo = channelData.logo != null ? channelData.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
        $scope.list.push(obj);
        }); //end stream
  }); //end channel call
});  //end forEach  

}]); //end of controller

})();