/*
*
*
*       Complete the handler logic below
*       
*       
*/

function patternExecute(value, pattern) {
  return pattern.exec(value)[0].replace(/\s/g, '');
}

function ConvertHandler() {
  
  this.getNum = input => {
    const units = [ 'gal', 'l', 'mi', 'km', 'lbs', 'kg' ];
    const pattern = /\d?[^a-z]*/;
    const patternExec = patternExecute(input, pattern);
    
    if (units.includes(input)) return 1;
    
    return Number(patternExec) ? patternExec : 'invalid number';
  };
  
  this.getUnit = input => {
    const units = [ 'gal', 'l', 'mi', 'km', 'lbs', 'kg' ];
    const pattern = /[^0-9.]+.*/;
    const patternExec = patternExecute(input, pattern);
    
    if (units.includes(patternExec)) return patternExec;
    
    return 'invalid unit';
  };
  
  this.getReturnUnit = initUnit => {
    switch (initUnit.toLowerCase()) {
      case 'mi' :
        return 'km';
      case 'km' :
        return 'mi';
      case 'gal':
        return 'l';
      case 'l'  :
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg' :
        return 'lbs';
      default   :
        return 'Invalid Unit';
    }
  };
  
  this.spellOutUnit = unit => {
    switch (unit.toLowerCase()) {
      case 'mi' :
        return 'miles';
      case 'km' :
        return 'kilometers';
      case 'gal':
        return 'gallons';
      case 'l'  :
        return 'liters';
      case 'lbs':
        return 'pounds';
      case 'kg' :
        return 'kilograms';
      default   :
        return 'Invalid Unit';
    }
  };
  
  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit.toLowerCase()) {
      case 'mi' :
        return initNum * miToKm;
      case 'km' :
        return initNum / miToKm;
      case 'gal':
        return initNum * galToL;
      case 'l'  :
        return initNum / galToL;
      case 'lbs':
        return initNum * lbsToKg;
      case 'kg' :
        return initNum / lbsToKg;
      default   :
        return 'ERROR';
    }
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) => `initNum ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
}

module.exports = ConvertHandler;
