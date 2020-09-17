// handle onload event of pages
window.onload = function () { 
  startClockTime();   // run clock with date
}; // end onload event

// handle clock with date
function startClockTime() {
  var today = new Date();   // get current date
  
  // extract year, month, day from current date
  var dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
  var [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(today);

  // extract hours, minutes, seconds of the current date
  var h = today.getHours();
  var m = checkTime(today.getMinutes());
  var s = checkTime(today.getSeconds());

  // build a full string to display
  document.getElementById('clock').innerHTML = month + ", " + day + ", " + year + " " + h + ":" + m + ":" + s;

  // update current date and time in real time
  setTimeout(startClockTime, 500);
} // end startClockTime

// format time with leading zero
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;  // add zero in front of numbers < 10
  }
  return i;
} // end checkTime

class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }
    
    toString() {
        return '(' + this.wheels + ')';
    }
}

class Car extends Vehicle {
    constructor(color) {
        super(4);
        this.color = color;
    }

    toString() {
        return super.toString() + ' colored: ' + this.color;
    }
}

let car = new Car('blue');
car.toString();
console.log(car instanceof Car);
console.log(car instanceof Vehicle);