module.exports = function toReadable (number) {
    const numbers = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten'];
        
    const upToTwenty = ['ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 
    'sixteen', 'seventeen', 'eighteen', 'nineteen']

    const dozens = ['twenty', 'thirty', 'forty', 
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let arr = (number.toString()).split("");
    let str = "";
    let counter = 0;
    
    if (number == 0){
        return "zero";
    }
    if (arr.length == 3){
            str+=numbers[arr[0]] + " " + "hundred" + " ";
            arr.shift();
    }
    if (arr.length == 2){
        if(arr[0] == 1){
            for(let i = 0; i < 10; i++){
                if(arr[1] == i){
                    str += upToTwenty[i];
                    return str; 
                }
            }
        }    
        if(arr[0] > 1){
            for(let i = 2; i < 10; i++){
                if(arr[0] == i){
                    str +=dozens[i-2] + " ";
                    arr.shift();
                    counter++;
					break;
                }    
            }
        }
		if(arr[0] == 0){
            if (counter != 0 ){
            str = str.split("");
            str.pop();
            str = str.join("");
            return str;
            }
            arr.shift();
        }
    }   
    if (arr.length == 1){
        if(arr[0] == 0){
            str = str.split("");
            str.pop();
            str = str.join("");
            return str;
        }else{
            str+=numbers[arr[0]];   
            return str;
        }
    }
    return str;
}
