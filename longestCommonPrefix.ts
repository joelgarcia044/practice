function longestCommonPrefix(strs: string[]): string {

    var minLength = 0;
    for(var i = 0; i < strs.length; i++) {
        if(strs[i].length < strs[i+1].length ){
            minLength += strs[i].length;        
        }
        else{
            minLength += strs[i+1].length;
        }
    }

    return "done";
}