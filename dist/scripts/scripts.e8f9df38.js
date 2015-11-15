"use strict";angular.module("teemOpsApp",["ngAnimate","ngCookies","ngResource","ui.router","ngSanitize","ngTouch","ui.bootstrap","LocalStorageModule","mgcrea.ngStrap"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("/",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl"}).state("addapp",{url:"/addapp",templateUrl:"views/addapp.html",controller:"AddAppCtrl"}).state("apps",{url:"/apps",templateUrl:"views/apps.html",controller:"ViewAppsCtrl"}).state("detail",{url:"/apps/detail/:id",templateUrl:"views/app-detail.html",controller:"AppDetailCtrl"})}]),angular.module("teemOpsApp").service("appManagerService",["localStorageService","$filter",function(a,b){var c=[],d=function(){c=[];var b=a.keys();angular.forEach(b,function(b){var d=a.get(b);d.status="stopped",d.cloudProvider="AWS",c.push(d)})};this.addApp=function(b){b.appId="teemOpsApp-"+b.appName.replace("","-"),a.set(b.appId,b)},this.getApp=function(a){0===c.length&&d();var e=b("filter")(c,{appId:a});return e&&e.length>0?e[0]:null},this.removeApp=function(b){a.remove(b)},this.stopApp=function(a){console.log("Stop app: "+a)},this.allApps=function(){return d(),c}}]),angular.module("teemOpsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("teemOpsApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("teemOpsApp").controller("AddAppCtrl",["$scope","appManagerService",function(a,b){var c=this;a.debug=!1,a.app={appName:null,environment:null,environmentType:null,database:null,caching:null,sourceCode:{source:null,authenticated:null,path:null}},a.storedApps=[],c.init=function(){a.storedApps=b.allApps()},a.submit=function(c){c&&(console.log(a.app),b.addApp(a.app),a.storedApps=b.allApps())},c.init()}]),angular.module("teemOpsApp").controller("ViewAppsCtrl",["$scope","appManagerService",function(a,b){var c=this;a.debug=!0,a.storedApps=[],c.init=function(){a.storedApps=b.allApps()},c.init()}]),angular.module("teemOpsApp").controller("AppDetailCtrl",["$scope","appManagerService","$stateParams","$filter","$location","$anchorScroll",function(a,b,c,d,e,f){var g=this;a.selectedApp=null,g.init=function(){a.selectedApp=b.getApp(c.id)},a.scrolltoHref=function(a){e.hash(a),f()},g.init()}]);