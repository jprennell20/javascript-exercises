const removeFromArray = function(array, ...theArgs) {
    
    for(const arg of theArgs){
        // Find index of argument, returns -1 if argument is not in array
        let index = array.indexOf(arg);
        if(index != -1){
            array.splice(index,1);
    }
}
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
