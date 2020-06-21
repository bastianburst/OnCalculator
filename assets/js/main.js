//Sebastian Gallego Full Stack Web Developer
$(document).ready(function () {
    //Declaration of variables
    var nums = [];
    var operators = [];
    var num1;
    var num2;
    var operator;
    var resultado;
    var introbuttonanimation = document.getElementById('intro');

    //Clear button
    $(".columncal0").click(function () {
        nums = [];
        operators = [];
        num1;
        num2;
        operator;
        $("#inputcalc").val("0");
        $("#inputcalc2").val("");
    });

    //Numbers buttons
    $(".columncal").click(function () {
        nums.push($(this).text());
        //Fills the nums array
        //console.log(nums);
        //Call addNumbers function
        addNumbers(nums);
    });
    //Operators buttons
    $(".columncal2").click(function () {
        //Asign to operator var
        operator = $(this).text();
        //Validate if operators array, is empty
        if (operators.length == 0) {
            //if is empty fill it woth operator var
            operators.push(operator);
            //Empty nums array, for receive de second number structure
            nums = [];
            //console.log(operators);
            //console.log(nums);
        } else {
            //If array is filled, animate intro button for indicate the user that he cant
            //add more operators
            introbuttonanimation.classList.add('animate__animated');
            introbuttonanimation.classList.add('animate__bounce');
        }
    });
    //Intro button
    $("#intro").click(function () {
        var number1 = $("#inputcalc").val();
        var number2 = $("#inputcalc2").val();
        //console.log(number1);
        //console.log(number2);
        //console.log(operator);
        //Call calculaResultado function with args number1 number2, and operator
        calculaResultado(number1, number2, operator);
        //empty arrays operators and nums
        nums = [];
        operators = [];
        //quit animation in Intro button
        introbuttonanimation.classList.remove('animate__animated');
        introbuttonanimation.classList.remove('animate__bounce');
    });

    //addNumber Function
    function addNumbers(nums) {
        //validate if operators array is empty
        if (operators.length == 0) {
            //if is empty, then fill num1 var
            var number = nums.join(',');
            var num1 = number.split(',').join('')
            //console.log(num1);
            //put value in input
            $("#inputcalc").val(num1);
        } else {
            //if operators is full, then fills num2 array
            var number = nums.join(',');
            var num2 = number.split(',').join('')
            //console.log(num2);
            //put value in input
            $("#inputcalc2").val(num2);
        }
    }


    //Result function
    function calculaResultado(number1, number2, operator) {
        //evaluate case and fill input with result
        switch (operator) {
            case "+":
                resultado = Number(number1) + Number(number2);
                $("#inputcalc").val("Resultado");
                $("#inputcalc2").val(resultado);
                break;
            case "-":
                resultado = Number(number1) - Number(number2);
                $("#inputcalc").val("Resultado");
                $("#inputcalc2").val(resultado);
                break;
            case "/":
                if (number1 == 0) {
                    resultado = Number(number1) / Number(number2);
                    $("#inputcalc").val("Result");
                    $("#inputcalc2").val("NAN");
                } else {
                    resultado = Number(number1) / Number(number2);
                    $("#inputcalc").val("Result");
                    $("#inputcalc2").val(resultado);
                }
                break;
            case "*":
                resultado = Number(number1) * Number(number2);
                $("#inputcalc").val("Result");
                $("#inputcalc2").val(resultado);
                break;
            default:
                console.log("End point");
        }
    }
});