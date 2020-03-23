/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = input => {
    const pattern = /\d?[^a-z]*/;
    if (input.toLowerCase() === 'gal' | 'lbs' | 'mi' | 'l' | 'kg' | 'km') return 1;
    const numberPart = pattern.exec(input)[0].replace(/\s/g, '');
    return Number(numberPart) ? numberPart : 'invalid number';
  };
  
  this.getUnit = function (input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function (initUnit) {
    var result;
    
    return result;
  };
  
  this.spellOutUnit = function (unit) {
    var result;
    
    return result;
  };
  
  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
