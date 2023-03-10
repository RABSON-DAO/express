
"use strict";
var app = angular.module("blockchainExpressDapp");

app.controller('SmartContractController', function ($scope, $ionicModal, $ionicScrollDelegate,DappService) {

    $scope.contractBalance = getSmartContractBalance();
    $scope.date = new Date();

    $scope.refreshContractBalance = function() {
         DappService.refreshBalanceFromBlockchain('smartContract');
        $scope.contractBalance = getSmartContractBalance();
        $scope.date = new Date();
        console.log('Refreshing Smart Contract Balance',$scope.contractBalance);
    }

    function getSmartContractBalance() {
        return DappService.getSmartContractBalance();
    }

      $scope.getBalance = function () {
        console.log('Balance is :', DappService.getBalance());
        return DappService.getBalance();
    }


});
