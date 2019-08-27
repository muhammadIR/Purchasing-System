'use strict';

module.exports = function(Transaction) {
        Transaction.remoteMethod(
            'getIdCustomer',
            {
                description: 'get id customer',
                accepts: [
                    { arg: 'id_customer', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getIdCustomer', verb: 'get' }
            }
        );
    
        Transaction.getIdCustomer = function(id_customer, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        id_customer : {
                            like : id_customer
                        }
                    }
                }
                Transaction.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Transaction Tidak Dapat Ditemukan")
                        err.statusCode = 404
                        reject (err)
                    }
                    resolve(result)
                })
            }).then(function(res){
                if (!res) callback (err)
                return callback (null, res)
            }).catch(function(err){
                callback(err);
            });
        }
    
        Transaction.remoteMethod(
            'getNameCategory',
            {
                description: 'get name category',
                accepts: [
                    { arg: 'name_category', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getNameCategory', verb: 'get' }
            }
        );
    
        Transaction.getNameCategory = function(name_category, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        name_category : {
                            like : name_category
                        }
                    }
                 }
                Transaction.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Name Tidak Dapat Ditemukan")
                        err.statusCode = 404
                        reject (err)
                    }
                    resolve(result)
                })

            }).then(function(res){
                if (!res) callback (err)
                return callback (null, res)
            }).catch(function(err){
                callback(err);
            });
        }    

        Transaction.remoteMethod(
            'getItem',
            {
                description: 'get item',
                accepts: [
                    { arg: 'item', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getItem', verb: 'get' }
            }
        );
    
        Transaction.getItem = function(item, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        item : {
                            like : item                        }
                    }
                 }
                Transaction.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Item Tidak Dapat Ditemukan")
                        err.statusCode = 404
                        reject (err)
                    }
                    resolve(result)
                })
            }).then(function(res){
                if (!res) callback (err)
                return callback (null, res)
            }).catch(function(err){
                callback(err);
            });
        }
        
        Transaction.remoteMethod(
            'getQuantity',
            {
                description: 'get quantity',
                accepts: [
                    { arg: 'quantity', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getQuantity', verb: 'get' }
            }
        );
    
        Transaction.getQuantity = function(quantity, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        quantity : {
                            like : quantity                        }
                    }
                 }
                Transaction.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Quantity Tidak Dapat Ditemukan")
                        err.statusCode = 404
                        reject (err)
                    }
                    resolve(result)
                })
            }).then(function(res){
                if (!res) callback (err)
                return callback (null, res)
            }).catch(function(err){
                callback(err);
            });
        }

        Transaction.remoteMethod(
            'getPrice',
            {
                description: 'get price',
                accepts: [
                    { arg: 'price', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getPrice', verb: 'get' }
            }
        );
    
        Transaction.getPrice = function(price, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        price : {
                            like : price                        }
                    }
                 }
                Transaction.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Price Tidak Dapat Ditemukan")
                        err.statusCode = 404
                        reject (err)
                    }
                    resolve(result)
                })
            }).then(function(res){
                if (!res) callback (err)
                return callback (null, res)
            }).catch(function(err){
                callback(err);
            });
        }
};
