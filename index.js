/**
 * Created by rupesh on 10/08/16.
 */
'use strict';
var rest = require('restler');
var Promise = require('bluebird')

var webService = function(url, data, timeout){
  this.url = url;
  this.data = data;
  this.response = '';
  this.timeout = timeout
  this.get = Promise.method(function(){
    rest.get(this.url)
      .on('complete', function(response){
        this.response = response;
        return true;
      })
      .on('error', function(response){
        this.response = response;
        return false;
      })
      .on('fail', function(response){
        this.response = response;
        return false;
      })
  });
  this.post = Promise.method(function(){
    rest.post(this.url, this.data)
      .on('complete', function(response){
        this.response = response;
        return true;
      })
      .on('error', function(response){
        this.response = response;
        return false;
      })
      .on('fail', function(response){
        this.response = response;
        return false;
      })
  });
  this.put = Promise.method(function(){
    rest.put(this.url, this.data)
      .on('complete', function(response){
        this.response = response;
        return true;
      })
      .on('error', function(response){
        this.response = response;
        return false;
      })
      .on('fail', function(response){
        this.response = response;
        return false;
      })
  });

}


module.exports = webService;