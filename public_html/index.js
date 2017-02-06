
var rules = new Rules(5);

function onDragStartComp(event) {
    event.dataTransfer.setData("text", event.target.id);
    var data = event.dataTransfer.getData("text");
}
;

function onDropBoxSlot(event) {
    event.preventDefault();

    var data = event.dataTransfer.getData("text");
    var idComp = document.getElementById(data).getAttribute('id-comp');
    var idBoxSlot = document.getElementById(getIdBoxSlot(event)).getAttribute('id-box-slot');
    if (rules.ableToReturnBox(idBoxSlot, idComp)) {
        rules.unSetComp(idComp);
        event.target.appendChild(document.getElementById(data));
    } else {
        alert("Please return the comp to its properly slot")
    }
 
}
;

function onDropBoardSlot(event) {
    event.preventDefault();

    var data = event.dataTransfer.getData("text");
    var idComp = document.getElementById(data).getAttribute('id-comp');
    var idBoardSlot = document.getElementById(getIdBoardSlot(event)).getAttribute('id-board-slot');
    alert("idComp "+idComp+" idBoardSlot "+idBoardSlot);
    if (rules.ableToSetComp(idBoardSlot)) {
        //hacer un unset si el drop viene de otro slot del board
        rules.unSetComp(idComp);
        rules.setComp(idBoardSlot, idComp);
        event.target.appendChild(document.getElementById(data));
        
    } else {
        alert("Slot full");
    }
}
;

function onDragOverBoxSlot(event) {
    event.preventDefault();
}
;

function onDragOverBoardSlot(event) {
    event.preventDefault();
}
;

function getIdBoardSlot(event) {
    var id = event.target.id;
    return id;
}
;

function getIdBoxSlot(event) {
    var id = event.target.id;
    return id;
}
;

function engageButton() {
  rules.cleanPlugedComps();
  rules.isCircuitProperlyConnected();
};

function reset() {
    location.reload();
};
