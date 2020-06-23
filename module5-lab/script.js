/*
    REGEX SOURCES:
    Phone number: http://regexlib.com/REDetails.aspx?regexp_id=45
    Credit card number: https://stackoverflow.com/questions/10246242/basic-regex-for-16-digit-numbers
    Security number: https://www.regular-expressions.info/numericranges.html
*/
//Validates booking form
function validateForm(){
    var numbers = [
        $("#phone").val(),
        $("#credit").val(),
        $("#security").val(),
    ];

    var expressions = [
        //phone number exp
        /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
        //credit card number exp
        /\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/,
        //security number exp
        /^[0-9]{3}$/,
    ];

    var types = [
        "phone number",
        "credit card number",
        "security number",
    ]

    var results = [];

    //Collect results
    for(var i = 0; i < expressions.length; i++){
        results[i] = checkNum(numbers[i], expressions[i]);
    }

    var alertTxt = "Invalid ";
    //Create alert
    for(var i = 0; i < results.length; i++){
        if(results[i] == false){
            alertTxt += types[i] + "; ";
        }
    }

    if($("#servicelist").val() == ""){
        alertTxt += "service selection; ";
    }

    if($("#datepicker").val() == ""){
        alertTxt += "date; "
    }

    if($("#fullname").val() == ""){
        alertTxt += "name; "
    }

    if($("#creditcard").val() == ""){
        alertTxt += "expiry date; "
    }

    //Alert user appropriately
    if(alertTxt != "Invalid "){
        alert(alertTxt);
    }
    else{
        alert("Success! Appointment request submitted");
    }
}

//Verifies that the given number has good format based of given expression
function checkNum(num, expression){
    if(expression.test(num)){
        return true;
    }
    return false;
}

//JQuery datepicker config for appointment
$(function(){
    $( "#datepicker" ).datepicker({
        minDate: 1,
        maxDate: '+1Y',
        beforeShowDay: setDates,
    });
});

//JQuery datepicker config for credit card
$(function(){
    $( "#creditcard" ).datepicker({
        minDate: 1,
        changeMonth: true,
            changeYear: true,
        dateFormat: "mm/yy"
    });
});

//Disables appropriate days in datepicker based off of worker chosen
function setDates(date){
    var worker = $("#workers").val();
    if(date.getDay() == 0 || date.getDay() == 6){
        return [false];
    }
    if((date.getDay() == 1 || date.getDay() == 3) && worker == "Alexandre (works Tue, Thu-Fri)"){
        return [false];
    }
    if(date.getDay() == 5 && worker == "Thomas (works Mon-Thu)"){
        return [false];
    }
    if(date.getDay() == 1 && worker == "Jim (works Tues-Fri)"){
        return [false];
    }
    else{
        return [true];
    }
}

$(selector).themes();