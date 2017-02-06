
var board = new Array("","","","","");
var compAmount = 5;
var wellPluged = 0;

function Rules(cAmount) {

}

Rules.prototype.ableToReturnBox = function (idBoxSlot, idComp) {
    if (idBoxSlot === idComp) {
        return true;
    }
    return false;
}

Rules.prototype.ableToSetComp = function(idBoardSlot){
    if (board[idBoardSlot] === "") {
        return true;
    }
    return false;
}

Rules.prototype.setComp = function (idBoardSlot, idComp) {
    board[idBoardSlot] = idComp;
}

Rules.prototype.unSetComp = function (idComp){
    for (var i = 0; i < board.length; i++) {
        if (board[i] == idComp) {
            board[i] = "";
        }
    }
}

Rules.prototype.isCircuitProperlyConnected = function () {
    for (var i = 0; i < board.length; i++) {
        if (board[i] == i ) {
            alert("sumando wellPluged");
            wellPluged++;
        }
    }
    if (wellPluged == 5) {
        alert("Circuit works! well pluged components: "+wellPluged);
    } else {
        alert("Circuit doesn't work! well pluged components: "+wellPluged);
    }
}

var rules = new Rules(5);
