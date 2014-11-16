!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require){var App=angular.module("app",["ui.router"]);App.controller(require("./controllers/UsersTableCtrl")),App.controller(require("./controllers/UserEditCtrl")),App.service(require("./services/localStorageService")),App.config(function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/");var _state=$stateProvider.state;$stateProvider.state=function(name,fn){if("string"!=typeof name){var object=name;for(var key in object)object.hasOwnProperty(key)&&_state.call(this,key,object[key])}else _state.call(this,name,fn)},$stateProvider.state(require("./routes"))}),App.run(function(localStorageService){localStorageService.get("users")||localStorageService.set("users",require("./mocks/users.json"))})},{"./controllers/UserEditCtrl":2,"./controllers/UsersTableCtrl":3,"./mocks/users.json":4,"./routes":5,"./services/localStorageService":6}],2:[function(require,module){module.exports={UserEditCtrl:function($scope,$stateParams,localStorageService,$state){var user,users=localStorageService.get("users");$stateParams.id&&(user=_.find(users,{id:$stateParams.id}),$scope.user=user),$scope.save=function(){_.merge(user,$scope.user),localStorageService.set("users",users),$state.go("table")},$scope.add=function(){$scope.user.id=++_.max(localStorageService.get("users"),"id").id,users.push($scope.user),localStorageService.set("users",users),$state.go("table")}}}},{}],3:[function(require,module){module.exports={UsersTableCtrl:function($scope,localStorageService,$state){$scope.users=localStorageService.get("users"),$scope.userEdit=function(userId){$state.go("userEdit",{id:userId})},$scope.userNew=function(){$state.go("userNew")},$scope.userRemove=function(userId){_.remove($scope.users,{id:userId}),localStorageService.set("users",$scope.users)}}}},{}],4:[function(require,module){module.exports=[{id:1,firstName:"John",lastName:"Silver",nickname:"JSilver"},{id:2,firstName:"Jack",lastName:"Sparrow",nickname:"CaptainJack"}]},{}],5:[function(require,module){module.exports={table:{url:"/",templateUrl:"templates/table.html"},userEdit:{url:"/users/{id:int}",templateUrl:"templates/edit.html"},userNew:{url:"/users/new",templateUrl:"templates/edit.html"}}},{}],6:[function(require,module){module.exports={localStorageService:function(){this.set=function(key,value){localStorage.setItem(key,JSON.stringify(value))},this.get=function(key){var value=localStorage.getItem(key);try{value=JSON.parse(value)}catch(e){throw Error("Cannot parse result from localStorage")}return value}}}},{}]},{},[1]);