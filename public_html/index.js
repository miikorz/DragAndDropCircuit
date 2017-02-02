function onDragStartComp(event) {
    event.dataTransfer.setData("text", event.target.id);
};

function onDropBoxSlot(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
};

function onDropBoardSlot(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
};

function onDragOverBoxSlot(event) {
    event.preventDefault();
};

function onDragOverBoardSlot(event) {
    event.preventDefault();
};

function getIdCompFromElementComp(elementComp){
    var value = $(elementComp).attr("id-comp")
    return $(elementComp).attr("id-comp") * 1;
};

function getIdBoardSlotFromElementBoardSlot(elementBoardSlot) {
    return $(elementBoardSlot).attr("id-board-slot") * 1;
};

function getIdBoardSlotFromElementBoardSlot(elementBoardSlot){
    return $(elementBoardSlot).attr("id-board-slot") * 1;
};

function getElementCompFromIdComp(idComp){
    var elements=$("[id-comp='" + idComp + "']");
    
    if (elements.length === 0) {
        throw "No existe el elemento con idComp=" + idComp;
    }
    if (elements.lenght > 1) {
        throw "Existe mas de un elemento con idComp=" + idComp;
    }
    
    return elements[0];
};

function getElementBoardSlotFromIdBoardSlot(idBoardSlot){
    return $("[id-board-slot='" + idBoardSlot + "']")[0];
};

function getElementBoardSlotFromIdBoardSlot(idBoardSlot){
    return $("[id-board-slot='" + idBoardSlot + "']")[0];
};