javascript:(function(){
    const home = "Effnerstraße+68,+81925+München";
    var args = '%s'.split(/[\s,]+/);
    var origin = ((args[0] == "home") ? home : args[0]);
    var destination = ((args[1] == "home") ? home : args[1]);
    var mode = "";
    switch(args[2]) {
        case "c":
            mode = "driving";
            break;
        case "b":
            mode = "bicycling";
            break;
        case "p":
            mode = "transit";
        } 
    document.location.href = "https://www.google.com/maps/dir/?api=1&origin=" + origin + "&destination=" + destination + "&travelmode=" + mode;
})();

javascript:(function(){ const home = "Effnerstraße+68,+81925+München"; var args = '%s'.split(/[\s,]+/); var origin = ((args[0] == "home") ? home : args[0]); var destination = ((args[1] == "home") ? home : args[1]); var mode = ""; switch(args[2]) { case "c": mode = "driving"; break; case "b": mode = "bicycling"; break; case "p": mode = "transit"; } document.location.href = "https://www.google.com/maps/dir/?api=1&origin=" + origin + "&destination=" + destination + "&travelmode=" + mode; })();

javascript:(function(){
    const home = "Effnerstraße+68,+81925+München";
    var args = '%s'.split(/[\s,]+/);
    var origin = ((args[0] == "home") ? home : args[0]);
    var destination = ((args[1] == "home") ? home : args[1]);
    document.location.href = "https://www.google.de/maps/dir/" + origin + "/" + destination;
})();

javascript:(function(){ const home = "Effnerstraße+68,+81925+München"; var args = '%s'.split(/[\s,]+/); var origin = ((args[0] == "home") ? home : args[0]); var destination = ((args[1] == "home") ? home : args[1]); document.location.href = "https://www.google.de/maps/dir/" + origin + "/" + destination; })();