var app= angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "homepage.html",
    controller : "HomeController"
  })
});


app.controller('HomeController',function($scope){
  $scope.open = function(){
    document.getElementById("myNav").style.width = "100%"; 
  }

  $scope.close = function(){
    document.getElementById("myNav").style.width = "0%"; 
  }
   
  $(window).scroll(function() {
    if(window.scrollY>200){
     $(".fixed-top").addClass("top-nav-collapse");
    }else{
      $(".fixed-top").addClass("navbar-inverse");
    }
  });

});


 


