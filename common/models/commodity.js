'use strict';

module.exports = function(Commodity) {
        Commodity.remoteMethod(
            'getCategory',
            {
                description: 'get category',
                accepts: [
                    { arg: 'category', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getcategory', verb: 'get' }
            }
        );
    
        Commodity.getCategory = function(category, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        category : {
                            like : category
                        }
                    }
                }
                Commodity.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Category Tidak Dapat Ditemukan")
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
    
        Commodity.remoteMethod(
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
    
        Commodity.getNameCategory = function(name_category, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        name_category : {
                            like : name_category
                        }
                    }
                 }
                Commodity.find(filter, function(err, result){
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

        Commodity.remoteMethod(
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
    
        Commodity.getQuantity = function(quantity, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        quantity : {
                            like : quantity                        }
                    }
                 }
                Commodity.find(filter, function(err, result){
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
        
};
