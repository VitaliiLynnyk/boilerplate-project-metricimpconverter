/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();
  
  app.route('/api/convert')
  .get((req, res) => {
    const input = req.query.input;
    let initNum, initUnit, returnNum, returnUnit, toString;
    
    // try {
    initNum = convertHandler.getNum(input);
    initUnit = convertHandler.getUnit(input);
    
    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      res.json({ error: 'invalid number and unit' });
    } else if (initNum === 'invalid number') {
      res.json({ error: 'invalid number' });
    } else if (initUnit === 'invalid unit') {
      res.json({ error: 'invalid unit' });
    }
    
    returnNum = convertHandler.convert(initNum, initUnit);
    returnUnit = convertHandler.getReturnUnit(initUnit);
    toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    
    res.json({
      'initNum': initNum,
      'initUnit': initUnit,
      'returnNum': returnNum,
      'returnUnit': returnUnit,
      'string': toString
    });
    
    // } catch (e) {
    //   res.json({ error: e.message })
    // }
  });
};
