// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    let bmi;
    if (mass<=0 || height<=0) return "INVALID INPUT"
    else{
        bmi=mass/(height*height)
        return bmi
    }
}

module.exports = BMICalculator;
