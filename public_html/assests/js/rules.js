
var board = new Array("", "", "", "", "");
var compAmount = 5;
var wellPlugged = 0;

function Rules(cAmount) {
    this.compAmount = cAmount;
}

Rules.prototype.ableToReturnBox = function (idBoxSlot, idComp) {
    if (idBoxSlot === idComp) {
        return true;
    }
    return false;
}

Rules.prototype.ableToSetComp = function (idBoardSlot) {
    if (board[idBoardSlot] === "") {
        return true;
    }
    return false;
}

Rules.prototype.setComp = function (idBoardSlot, idComp) {
    board[idBoardSlot] = idComp;
}

Rules.prototype.unSetComp = function (idComp) {
    for (var i = 0; i < board.length; i++) {
        if (board[i] == idComp) {
            board[i] = "";
        }
    }
}

Rules.prototype.isCircuitProperlyConnected = function () {
    for (var i = 0; i < board.length; i++) {
        if (board[i] == i) {
            wellPlugged++;
        }
    }
    if (wellPlugged === compAmount) {
        $('small').text(wellPlugged);
        return true;
    } else {
        $('small').text(wellPlugged);
        return false;
    }
}

Rules.prototype.cleanPluggedComps = function () {
    wellPlugged = 0;
}

Rules.prototype.isBoardFull = function() {
    for (var i = 0; i < board.length; i++) {
        if (board[i] == "") {
            return false;
        }
    }
    return true;
}

var rules = new Rules(5);
