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

function toFormatNumber(numb) {
  return Math.floor(numb * 100) / 100;
}

function ConvertHandler() {
  
  this.getNum = input => {
    const units = [ 'gal', 'l', 'mi', 'km', 'lbs', 'kg' ];
    const pattern = /\d?[^a-z]*/;
    const patternExec = patternExecute(input, pattern);
    const numb = Number(patternExec);
    
    if (units.includes(input)) return 1;
    
    return numb ? numb : 'invalid number';
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
    let convertedNumb;
    
    switch (initUnit.toLowerCase()) {
      case 'mi' :
        convertedNumb = initNum * miToKm;
        break;
      case 'km' :
        convertedNumb = initNum / miToKm;
        break;
      case 'gal':
        convertedNumb = initNum * galToL;
        break;
      case 'l'  :
        convertedNumb = initNum / galToL;
        break;
      case 'lbs':
        convertedNumb = initNum * lbsToKg;
        break;
      case 'kg' :
        convertedNumb = initNum / lbsToKg;
        break;
      default   :
        return 'ERROR';
    }
    
    return toFormatNumber(convertedNumb);
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) => `${initNum} ${this.spellOutUnit(initUnit)} converts to ${toFormatNumber(returnNum)} ${this.spellOutUnit(returnUnit)}`;
}

module.exports = ConvertHandler;
