'use strict';

module.exports = function(Admin) {
    Admin.remoteMethod(
        'getNameLike',
        {
            description: 'get name like',
            accepts: [
                { arg: 'name', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameLike', verb: 'get' }
        }
    );

    Admin.getNameLike = function(name, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    name : {
                        like : name
                    }
                }
            }
            Admin.find(filter, function(err, result){
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

    Admin.remoteMethod(
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

    Admin.getEmail = function(email, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    email : {
                        like : email_
                    }
                }
             }
            Admin.find(filter, function(err, result){
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

    Admin.remoteMethod(
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

    Admin.getAddress = function(address, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    address : {
                        like : address_
                    }
                }
             }
            Admin.find(filter, function(err, result){
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

    Admin.remoteMethod(
        'getUsername',
        {
            description: 'get username like',
            accepts: [
                { arg: 'username', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getUsername', verb: 'get' }
        }
    );

    Admin.getUsername = function(username, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    username : {
                        like : user_name
                    }
                }
             }
            Admin.find(filter, function(err, result){
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

    Admin.remoteMethod(
        'getPassword',
        {
            description: 'get password like',
            accepts: [
                { arg: 'password', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getPassword', verb: 'get' }
        }
    );

    Admin.getPassword = function(password, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    password : {
                        like : password_
                    }
                }
             }
            Admin.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Password Tidak Dapat Ditemukan")
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