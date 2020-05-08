function layerchange() {
    var layer = document.getElementById("slider");
    var filename = "bodies/body_"+layer.value+".png";

    document.getElementById("human").src = filename;
}
