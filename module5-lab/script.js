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
