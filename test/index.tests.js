"use strict";

var assert = require("assert");
var getMap = require("../index.js");


describe('basic test', function(){
    it('should create map', function(){
        var key;
        var tomap = [1,2,'abc'];
        var map = getMap(tomap);
        
        tomap.forEach(function (key){
            assert.equal(key,map[key]);
        });

    });

});