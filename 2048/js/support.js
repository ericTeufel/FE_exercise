function getPosTop(i, j) {
    // console.log(20+i*120);
    return 20 + i * 120;
}

function getPosLeft(i, j) {
    // console.log(20+j*120);
    return 20 + j * 120;
}

function getNumberBackgroundColor(number) {

    switch (number) {

        case 2:
            return "#eee4da";

            break;

        case 4:
            return "#ede0c8";

            break;

        case 8:
            return "#f2b179";

            break;

        case 16:
            return "#f59563";

            break;

        case 32:
            return "#f67c5f";

            break;

        case 64:
            return "#f65e3b";

            break;

        case 128:
            return "#edcf72";

            break;

        case 258:
            return "#edcc61";

            break;

        case 512:
            return "#9c0";

            break;
    }
    return "#000";
}

function getNumberColor(num){
    if (number <= 4) {
        return "#776e65";
    }
    return "#fff";
}

function nospace(obj){
    for (var i = 0; i < 4 ; i++) {
        for( var j = 0 ; j < 4 ; j ++ ){
            if (board[i][j] == 0) {
                return false;
            }else {
                return true;
            }
        }
    }
}
