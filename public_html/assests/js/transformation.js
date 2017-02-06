var transform = {
    scale: false,
};

function setTransformations() {
    var transformStyle = "";

    if (transform.scale === true) {
        transformStyle += "scale(1.5, 1.5)";
    }

    document.getElementById("checkCircuit").style.transform = transformStyle;
    
}


function scale() {
    transform.scale = true;
    setTransformations();
}

function resetScale() {
    transform.scale = false;
    setTransformations();
}


