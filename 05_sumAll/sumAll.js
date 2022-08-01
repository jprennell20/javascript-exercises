const sumAll = function(firstInt, secondInt) {

    // Confirm user provided integer arguments
    if(Number.isInteger(firstInt) && firstInt >= 0 && 
       Number.isInteger(secondInt) && secondInt >= 0){

        // Identify the lower and upper boundaries
        if(firstInt > secondInt){
            upperBoundary = firstInt;
            lowerBoundary = secondInt;
        }else{
            upperBoundary = secondInt;
            lowerBoundary = firstInt;
        }

        // Loop from lower to upper boundary
    
        let result = 0;
        for(let i = lowerBoundary; i <= upperBoundary; i++){
            result += i;
        }
        return result;
        
    }else{
        return "ERROR"
    }


};

// Do not edit below this line
module.exports = sumAll;
