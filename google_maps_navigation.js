// "%s" is replaced by the string behind the keyword at runtime (these are your "parameters")
// document.location.href is the place to store the requested URL
// Usage: "your keyword", origin, destination, mode of transport (c/b/p)
javascript:
var home = "### put in your home adress here ###";
var args = "%s".split(/[\s,]+/);
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

// Remember the code must be a single line without tabs and other formating to work as a Bookmarklet
javascript: var home = "### put in your home adress here ###"; var args = "%s".split(/[\s,]+/); var origin = ((args[0] == "home") ? home : args[0]); var destination = ((args[1] == "home") ? home : args[1]); var mode = ""; switch(args[2]) { case "c": mode = "driving"; break; case "b": mode = "bicycling"; break; case "p": mode = "transit"; } document.location.href = "https://www.google.com/maps/dir/?api=1&origin=" + origin + "&destination=" + destination + "&travelmode=" + mode;


// old and simpler code version not utilizing the provided Google Maps API
javascript:(function(){
    const home = "### put in your home adress here ###";
    var args = "%s".split(/[\s,]+/);
    var origin = ((args[0] == "home") ? home : args[0]);
    var destination = ((args[1] == "home") ? home : args[1]);
    document.location.href = "https://www.google.de/maps/dir/" + origin + "/" + destination;
})();

// line variant
javascript:(function(){ const home = "### put in your home adress here ###"; var args = "%s".split(/[\s,]+/); var origin = ((args[0] == "home") ? home : args[0]); var destination = ((args[1] == "home") ? home : args[1]); document.location.href = "https://www.google.de/maps/dir/" + origin + "/" + destination; })();