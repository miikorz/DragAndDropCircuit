
var rules = new Rules(5);

function onDragStartComp(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function onDropBoxSlot(event) {
    event.preventDefault();

    var data = event.dataTransfer.getData("text");
    var idComp = document.getElementById(data).getAttribute('id-comp');
    var idBoxSlot = document.getElementById(getIdBoxSlot(event)).getAttribute('id-box-slot');
    if (rules.ableToReturnBox(idBoxSlot, idComp)) {
        rules.unSetComp(idComp);
        event.target.appendChild(document.getElementById(data));
    } else {
        $("#myModal4").modal();
    }

    engageButtonManager();
}

function onDropBoardSlot(event) {
    event.preventDefault();

    var data = event.dataTransfer.getData("text");
    var idComp = document.getElementById(data).getAttribute('id-comp');
    var idBoardSlot = document.getElementById(getIdBoardSlot(event)).getAttribute('id-board-slot');

    if (rules.ableToSetComp(idBoardSlot)) {
        rules.unSetComp(idComp);
        rules.setComp(idBoardSlot, idComp);
        event.target.appendChild(document.getElementById(data));
    } else {
        $("#myModal1").modal();
    }
    $(document.getElementById(data)).addClass('animated bounce');
    engageButtonManager();
}

function onDragOverBoxSlot(event) {
    event.preventDefault();
}

function onDragOverBoardSlot(event) {
    event.preventDefault();
}

function getIdBoardSlot(event) {
    var id = event.target.id;
    return id;
}

function getIdBoxSlot(event) {
    var id = event.target.id;
    return id;
}

function engageButton() {
    rules.cleanPluggedComps();
    if (rules.isCircuitProperlyConnected()) {
        $("#myModal2").modal();
        for (var i = 0; i < 4; i++) {
            $('#diode' + (i + 1)).removeClass('diodeOff');
            $('#diode' + (i + 1)).addClass('diodeOn');
        }
    } else {
        $("#myModal3").modal();
        for (var i = 0; i < 4; i++) {
            $('#diode' + (i + 1)).removeClass('diodeOn');
            $('#diode' + (i + 1)).addClass('diodeOff');
        }
    }
}

function engageButtonManager() {
    if (rules.isBoardFull()) {
        $('#checkCircuit').removeClass('disabled');
        $('#checkCircuit').attr('onclick', 'engageButton()');
        scale();
    } else {
        $('#checkCircuit').addClass('disabled');
        $('#checkCircuit').removeAttr('onclick');
        resetScale();
    }
}

function reset() {
    document.getElementById("boxSlot5").appendChild(document.getElementById("comp5"));
    document.getElementById("boxSlot4").appendChild(document.getElementById("comp4"));
    document.getElementById("boxSlot3").appendChild(document.getElementById("comp3"));
    document.getElementById("boxSlot2").appendChild(document.getElementById("comp2"));
    document.getElementById("boxSlot1").appendChild(document.getElementById("comp1"));

    for (var i = 0; i < rules.compAmount; i++) {
        rules.unSetComp(i);
    }

    rules.cleanPluggedComps();
    
     $('small').text(wellPlugged);

    engageButtonManager();
    
    resetScale();

    for (var i = 0; i < 4; i++) {
        $('#diode' + (i + 1)).removeClass('diodeOff');
        $('#diode' + (i + 1)).removeClass('diodeOn');
    }

}

