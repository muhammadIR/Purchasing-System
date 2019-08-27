'use strict';

module.exports = function(Customer) {
        Customer.remoteMethod(
            'getNameLike',
            {
                description: 'get name like',
                accepts: [
                    { arg: 'firstname', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getNameLike', verb: 'get' }
            }
        );
    
        Customer.getNameLike = function(firstname, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        firstname : {
                            like : first_name
                        }
                    }
                }
                Employee.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Nama Tidak Dapat Ditemukan")
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
    
        Customer.remoteMethod(
            'getLastName',
            {
                description: 'get last name like',
                accepts: [
                    { arg: 'lastname', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getLastName', verb: 'get' }
            }
        );
    
        Customer.getLastName = function(lastname, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        lastname : {
                            like : last_name
                        }
                    }
                }
                Customer.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Nama Akhir Tidak Dapat Ditemukan")
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
    
        Customer.remoteMethod(
            'getEmail',
            {
                description: 'get email like',
                accepts: [
                    { arg: 'email', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getEmail', verb: 'get' }
            }
        );
    
        Customer.getEmail = function(email, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        email : {
                            like : email_
                        }
                    }
                 }
                Customer.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Email Tidak Dapat Ditemukan")
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

        Customer.remoteMethod(
            'getAddress',
            {
                description: 'get address like',
                accepts: [
                    { arg: 'address', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getAddress', verb: 'get' }
            }
        );
    
        Customer.getAddress = function(address, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        address : {
                            like : address_
                        }
                    }
                 }
                Customer.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Address Tidak Dapat Ditemukan")
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
    
        Customer.remoteMethod(
            'getPhone',
            {
                description: 'get phone like',
                accepts: [
                    { arg: 'phone', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getPhone', verb: 'get' }
            }
        );
    
        Customer.getPhone = function(phone, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        phone : {
                            like : phone_
                        }
                    }
                 }
                Customer.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Email Tidak Dapat Ditemukan")
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

        Customer.remoteMethod(
            'getGender',
            {
                description: 'get gender like',
                accepts: [
                    { arg: 'gender', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getGender', verb: 'get' }
            }
        );
    
        Customer.getGender = function(gender, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        gender : {
                            like : gender_
                        }
                    }
                 }
                Customer.find(filter, function(err, result){
                    if(err) reject (err)
                    if(result === null){
                        err = new Error ("Email Tidak Dapat Ditemukan")
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