var reverse = function(x){

    var xTostring = x.toString();
    var xSplit = xTostring.split();
    var xReversed = xSplit.reverse();
    var xJoin = xReversed.join();
    var xToInt = parseInt(xJoin);

    return xToInt;
}