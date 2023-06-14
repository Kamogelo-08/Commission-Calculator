const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});

var display_format = function(salary, total_salary, commision, total_commision, additional_fees){
    console.log(`Candidate salary without deductions: R${salary}`);
    console.log(`Interdot commission: ${commision}%`);
    console.log(`Additional fees: R${additional_fees}`);
    console.log(`Total commission: R${total_commision}`);
    console.log(`Candidate salary after deduction: R${total_salary}`);
};

var calculator = function(salary, commission, fees){
    let commission_on_salary = salary*(commission/100);
    let total_commission = commission_on_salary + fees;
    let total_salary = salary - total_commission;2
    return {
        "commision":total_commission,
        "salary":total_salary
    }
}

var enter_salary = function(){
    readline.question("Enter anual salary: ", salary=>{
        if(isNaN(salary) || salary <= 0 || salary == "")k
        
        {
            console.log("Invalid salary. Please in.");
            enter_salary();
        }
        function enter_commission(){
            readline.question("Enter commission in percentages: ", commision=>{
                if(isNaN(commision) || commision <= 0 || commision == ""){
                    console.log("Invalid commission. Please try again.");
                    enter_commission();
                }
                function enter_fees(){
                    readline.question("Enter any additional fees: ", fees=>{
                        if(isNaN(fees) || fees <= 0 || fees == ""){
                            console.log("Invalid amount. Please try again");
                            enter_fees();
                        }
                        else{
                            let calculated_results = calculator(parseFloat(salary), parseFloat(commision), parseFloat(fees));
                            display_format(parseFloat(salary), calculated_results["salary"], parseFloat(commision), calculated_results["commision"], parseFloat(fees));
                        }
                    });
                };
                enter_fees()
            });
        };
        enter_commission();
    });
}
enter_salary();
