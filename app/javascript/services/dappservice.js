"use strict";
var app = angular.module("blockchainExpressDapp");


app.factory('DappService', function(){

     var packages = [{ id: 1, sender: 'John', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-1276',senderEmail: 'faeez.shaikh@gmail.com',  receiverAddr: '234 Brook St. Chesterfield MO 63103',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 50, miles: 0.5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5duF2C4wJfJfEoCTbe23miXSwN7De5wHwY5PtGs3KoP_aASn4Gg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'Ready' },
    { id: 2, sender: 'Mary', senderAddr:'123 Pine St. St. Louis MO 63101', senderPhone: '800-BIG-MARY',senderEmail: 'faeez.shaikh@gmail.com', receiverAddr: '3323 Weber Rd. Ballwin MO 63011',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 30, miles: 1.3, img: 'http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/money/spending/consumer-rights/parcel-scam-shutterstock-291281267.jpg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'Ready' },
    { id: 3, sender: 'Mike', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-4321', senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '5398 Brunswick Dr, Hazelwood MO 63245',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 20, miles: 2.5, img: 'http://www.shipping-usa.co.uk/images/send-parcel-to-usa.png',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'Ready' },
    { id: 4, sender: 'Adam', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-5678',senderEmail: 'faeez.shaikh@gmail.com', receiverAddr: '9445 Potter Rd. Des Plaines IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 90, miles: 2.8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JtPHRxj4dx5VjPEDxq3nIeJUjwCiiusazV9_ImTVXZNpOGz4tg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'In Transit' },
    { id: 5, sender: 'Julie', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-8765',senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '244 Pine St. St. Louis MO 63101',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com' ,gems: 70, miles: 3.0, img: 'https://www.directcouriersolutions.com/wp-content/uploads/2015/02/parcel-500-660-500x600.jpg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!' , status:'Ready'},
    { id: 6, sender: 'Juliette', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-5678', senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '8334 Golf Rd. Niles IL 9235',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 60, miles: 3.5, img: 'http://www.book-cycle.org/wp-content/uploads/2015/08/parcel.png' ,fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'In Transit'},
    { id: 7, sender: 'John', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-1276',senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '982 Chestnut St. St. Louis MO 63103',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com' ,gems: 30, miles: 4.0, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5duF2C4wJfJfEoCTbe23miXSwN7De5wHwY5PtGs3KoP_aASn4Gg' ,fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'Ready'},
    { id: 8, sender: 'Mary', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '800-BIG-MARY', senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '243 Strecker Rd. Wildwood MO 63234',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 200, miles: 4.5, img: 'http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/money/spending/consumer-rights/parcel-scam-shutterstock-291281267.jpg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!' , status:'Ready'},
    { id: 9, sender: 'Mike', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-4321',senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '834 Wildhorse Ave. Ellisville MO 63143',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com' ,gems: 40, miles: 5.0, img: 'http://www.shipping-usa.co.uk/images/send-parcel-to-usa.png' ,fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'Ready'},
    { id: 10, sender: 'Adam', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-5678', senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '356 Park Ave. St. Louis MO 63134',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 50, miles: 5.5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JtPHRxj4dx5VjPEDxq3nIeJUjwCiiusazV9_ImTVXZNpOGz4tg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'Ready' },
    { id: 11, sender: 'Julie', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-8765',senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '234 Executive Dr. Collinsville MO 63124',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com' ,gems: 60, miles: 5.8, img: 'https://www.directcouriersolutions.com/wp-content/uploads/2015/02/parcel-500-660-500x600.jpg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'Ready' },
    { id: 12, sender: 'Juliette',senderAddr:'123 Pine St. St. Louis MO 63101', senderPhone: '555-5678', senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '74 Bridge Rd. Bridgeton MO 63123 ',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 80, miles: 6.0, img: 'http://www.book-cycle.org/wp-content/uploads/2015/08/parcel.png',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'Ready' }];

  

  var balance;
  var smartContractBalance = 0;
  var smartContractAddress;
  var smartContractInstance;
  
    return {
      addPackage : function(pkg) {
        console.log('Adding package: ',pkg);
        packages.push(pkg);
        console.log('New pkgs list: ',packages);
      },
      updatePackage : function(pkg) {
        console.log('Updating package: ',pkg);
        for(i=0;i<packages.length;i++) {
          if(packages[i].id == pkg.id) {
             packages[i] = pkg;
              console.log('Pkg successfully updated',packages[i]);
          }
        }
      },
      getPackages : function() {
        console.log('Returning Packages: ', packages);
        return packages;
      },
      getPackage : function(id) {
        for(i=0;i<packages.length;i++) {
          if(packages[i].id == id) {
            return packages[i];
          }
        }
      },
      getBalance : function() {
        return balance;
      },
      setBalance: function(bal) {
        balance = bal;
      },
      getSmartContractBalance : function() {
        return smartContractBalance;
      },
      setSmartContractBalance: function(bal) {
        smartContractBalance = bal;
      },
      setSmartContractAddress: function(addr) {
         smartContractAddress = addr; 
      },
      getSmartContractAddress: function() {
        return smartContractAddress;
      },
      getBlockchainAddressBalance: function(address,nickname) {
         var val = web3.eth.getBalance(address);
         var balance = web3.fromWei(val,'ether').toNumber()
         console.log('Blockchain Address :' + address + ' Nickname: ' + nickname +  ' ==>  Balance: ', balance );
         return balance;
      },
      setSmartContractInstance: function(contract) {
         smartContractInstance = contract;
      },
      addNewPackageOnBlockchain: function(value) {
           var that = this;
           smartContractInstance.addNewPackage(value).then(function(result) {
              console.log('New package added to blockchain. Contract updated: ', result);
              smartContractInstance.queryBalance(smartContractInstance.address).then(function(res){
                    console.log('Contract Balance AFTER Adding Package: :', res.c[0]);
                    that.setSmartContractBalance(res.c[0]);
               });
               smartContractInstance.queryBalance(web3.eth.accounts[0]).then(function(res){
                    console.log('Account Balance AFTER Adding Package: ', res.c[0]);
                    that.setBalance(res.c[0]);
                }); 
        });
      },
      pickupPackageOnBlockchain: function(value) {
        var that = this;
        smartContractInstance.pickupPackage(value,{from: web3.eth.accounts[0]}).then(function(result){
              console.log('Package  with value' + value + ' picked up by: ' + web3.eth.accounts[0] );
              smartContractInstance.queryBalance(smartContractInstance.address).then(function(res){
                    console.log('Contract Balance AFTER Picking up Package: :', res.c[0]);
                    that.setSmartContractBalance(res.c[0]);
               });
               smartContractInstance.queryBalance(web3.eth.accounts[0]).then(function(res){
                    console.log('Account Balance AFTER Picking up Package: ', res.c[0]);
                    that.setBalance(res.c[0]);
                }); 

        });

      },
      deliverPackageOnBlockchain: function(value) {
        var that = this;
        smartContractInstance.deliverPackage(value,{from: web3.eth.accounts[0]}).then(function(result){
              console.log('Package  with value' + value + ' delivered by: ' + web3.eth.accounts[0] );
              smartContractInstance.queryBalance(smartContractInstance.address).then(function(res){
                    console.log('Contract Balance AFTER  Package Delivery: :', res.c[0]);
                    that.setSmartContractBalance(res.c[0]);
               });
               smartContractInstance.queryBalance(web3.eth.accounts[0]).then(function(res){
                    console.log('Account Balance AFTER  Package Delivery: ', res.c[0]);
                    that.setBalance(res.c[0]);
                }); 

        });
      },
      refreshBalanceFromBlockchain: function(addr) {
        var that = this;
        var address = (addr === 'smartContract') ? smartContractInstance.address : web3.eth.accounts[0];

         smartContractInstance.queryBalance(address).then(function(res){
                    console.log('Refreshing Balance from Blockchain', res.c[0]);
                    if(addr === 'smartContract')
                      that.setSmartContractBalance(res.c[0]);
                    else
                      that.setBalance(res.c[0]);
          });
      }
    }

});


