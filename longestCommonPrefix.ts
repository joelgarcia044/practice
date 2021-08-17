function MinimumStringLength(strs: string[]): Number {

    var minLength = 1;
    for(var i = 0; i < strs.length; i++) {
        if(strs[i].length < minLength) ){
            minLength = strs[i].length;        
        }
    }
    return minLength;
}

function longestCommonPrefix(strs: string[]): string{
    
    for(var i = 0; i < strs.length; i++){
        var arr_i: string = strs[i];
        for(var j = 0; j < strs.length; j++){
            if(arr_i.charAt(j) )
        }

    }
    
    return "done";
}