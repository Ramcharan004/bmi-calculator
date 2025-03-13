function calculateBMI() {
var weight = parseFloat(document.getElementById("weight").value);
var height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
var age = parseInt(document.getElementById("age").value);
var bmi = weight / (height * height);
var resultElement = document.getElementById("result");
resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2);

var category = getBMICategory(age, bmi);
resultElement.innerHTML += " (" + category + ")";
}

function getBMICategory(age, bmi) {
if (age >= 2 && age <= 18) {
if (bmi < 18.5) {
    return "Underweight";
} else if (bmi >= 18.5 && bmi < 25) {
    return "Normal Weight";
} else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
}
} else if (age >= 18 && age <= 65) {
if (bmi < 18.5) {
    return "Underweight";
} else if (bmi >= 18.5 && bmi < 25) {
    return "Normal Weight";
} else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
} else if (bmi >= 30 && bmi < 35) {
    return "Obese Class I";
} else if (bmi >= 35 && bmi < 40) {
    return "Obese Class II";
} else {
    return "Obese Class III";
}
} else if (age > 65) {
if (bmi < 22) {
    return "Underweight";
} else if (bmi >= 22 && bmi < 27) {
    return "Normal Weight";
} else {
    return "Overweight";
}
}

return "Unknown Category";
}
function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    document.getElementById("result").innerHTML = "";

    document.getElementById("feetAndInches").value = "";
    document.getElementById("conversion-result").innerHTML = "";
}
function convertFeetAndInchesToCm() {
    var feetAndInches = document.getElementById("feetAndInches").value;
    var parts = feetAndInches.split('.');
    if (parts.length === 2) {
        var feet = parseFloat(parts[0]);
        var inches = parseFloat(parts[1]);
        var cm = (feet * 30.48) + (inches * 2.54);
        var conversionResult = document.getElementById("conversion-result");
        conversionResult.innerHTML = feet + " feet and " + inches + " inches is equal to " + cm.toFixed(2) + " cm.";
    } else {
        var conversionResult = document.getElementById("conversion-result");
        conversionResult.innerHTML = "Please enter a valid format, e.g., 5.6 (5 feet 6 inches).";
    }
}
