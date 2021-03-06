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
    let indexOfUnit = input.search(/[a-zA-Z]/);
    let numbers;
    
    if (indexOfUnit === -1) {
      numbers = input;
    } else {
      numbers = input.substring(0, indexOfUnit);
    }
    
    if (numbers.length === 0) {
      numbers = '1';
    }
    
    if (numbers.split(/\//).length > 2) return 'invalid number';
    
    return eval(numbers);
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
        throw Error('invalid unit');
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
        throw Error('invalid unit');
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
        throw Error('Error');
    }
    
    return toFormatNumber(convertedNumb);
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) => `${initNum} ${this.spellOutUnit(initUnit)} converts to ${toFormatNumber(returnNum)} ${this.spellOutUnit(returnUnit)}`;
}

module.exports = ConvertHandler;
