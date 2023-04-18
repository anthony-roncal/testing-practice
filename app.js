function app() {

    function capitalize(string) {
        return(string.charAt(0).toUpperCase() + string.slice(1));
    }

    function reverseString(string) {
        if(string === "")
            return "";
        else
            return reverseString(string.substr(1)) + string.charAt(0);
    }

    function caesarCipher(string, shift) {
        let returnString = '';
        if(shift > 25 || shift < -25)
            shift = shift % 26;
        for(let i = 0; i < string.length; i++) {
            if(string.charAt(i) === " ") 
                returnString = returnString.concat(" ");
            else {
                let code = string.charCodeAt(i) + shift;
                if((code > 122) || (code > 90 && string.charCodeAt(i) < 91)) {
                    code -= 26;
                }
                if((code < 97 && string.charCodeAt(i) > 96) || (code < 65 && string.charCodeAt(i) > 64)) {
                    code += 26;
                }
                returnString = returnString.concat(String.fromCharCode(code));
            }
        }
        return returnString;
    }

     function analyzeArray(array) {
        let sum = 0;
        let min = array[0];
        let max = array[0];
        array.forEach(x => {
            sum += x;
            if(x < min)
                min = x;
            if(x > max)
                max = x;
        })
        let average = sum/array.length;
        return {
            average: average,
            min: min,
            max: max,
            length: array.length
        }
     }

    return {
        capitalize,
        reverseString,
        caesarCipher,
        analyzeArray
    };

}

module.exports = app;
