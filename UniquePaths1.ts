function uniquePaths(m: number, n: number): number {
    var paths:number[][] = [[m],[n]];
    
    for(var i = 0; i < paths.length; i++){
        paths[i][0] = 1;
    }
    for(var i = 0; paths[0].length; i++){
        paths[0][i] = 1;
    }
    for(var i = 1; i < paths.length; i++){
        for(var j = 1; j < paths[i].length; j++){
            paths[i][j] = paths[i-1][j] + paths[i][j-1];
        }
    }


    return paths[m-1][n-1];
};