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
  return number1 * number2;
  };
  
  $(document).ready(function() {
    $("form#add").submit(function(event) {
    event.preventDefault();
      const number1 = parseInt($("#add1").val());
      const number2 = parseInt($("#add2").val());
      const result = add(number1, number2);
      $("#output").text(result);
    });
    $("form#subtract").submit(function(event){
      event.preventDefault();
        const number1 = parseInt($("#sub1").val());
        const number2 = parseInt($("#sub2").val());
        const result = sub(number1, number2);
        $("#output").text(result);
    });
    $("form#multiply").submit(function(event) {
      event.preventDefault();
        const number1 = parseInt($("#mul1").val());
        const number2 = parseInt($("#mul2").val());
        const result = multi(number1, number2);
        $("#output").text(result);
    });
  });
  
  