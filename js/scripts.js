//Addition Calculator

const add = function(number1, number2) {
  return number1 + number2;
  };

//Subtraction Calculator

const sub = function(number1, number2) {
  return number1 - number2;
  };

//Division Calculator

const divide = function(number1, number2) {
  return number1 / number2;
  };

//Multiplication Calculator

const multi = function(number1, number2) {
  return number1 + number2;
  };
  
  $(document).ready(function() {
    $("form#add").submit(function(event) {
    event.preventDefault();
      const number1 = parseInt($("#add1").val());
      const number2 = parseInt($("#add2").val());
      const result = add(number1, number2);
      $("#output").text(result);
    });
  });