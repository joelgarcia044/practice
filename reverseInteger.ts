function reverse(number: number): number {
    let rev = 0;
    while(number > 0) {
        rev = (rev*10) + (number%10);
        number = Math.floor(number/10);
    }
    return rev;
}


//recursive reverse function
function recursiveRev(number: number): number {
    var rev = 0;
    let base = 1;
    if(number > 0){
        recursiveRev(Math.floor(number/10));
        rev = rev + (number%10)*base;
        base = base*10;
    }
    return rev;
}