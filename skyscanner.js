// alpha version, ugly, not using any API
// "%s" is replaced by the string behind the keyword at runtime (these are your "parameters")
// document.location.href is the place to store the requested URL
// Usage: "your keyword", origin (IATA-Code), destination (IATA-Code), awaydate (YYMMDD)[, returndate (YYMMDD)]
javascript:
var home = "muc";
var args = "%s".split(/[\s,]+/);
var origin = ((args[0] == "home") ? home : args[0]);
var destination = ((args[1] == "home") ? home : args[1]);
var awaydate = args[2];
var returndate = ((typeof args[3] === "undefined") ? "" : "/" + args[3]);
document.location.href = "https://www.skyscanner.com/transport/flights/" + origin + "/" + destination + "/" + awaydate + returndate;

javascript: var home = "muc"; var args = "%s".split(/[\s,]+/); var origin = ((args[0] == "home") ? home : args[0]); var destination = ((args[1] == "home") ? home : args[1]); var awaydate = args[2]; var returndate = ((typeof args[3] === "undefined") ? "" : "/" + args[3]); document.location.href = "https://www.skyscanner.com/transport/flights/" + origin + "/" + destination + "/" + awaydate + returndate;

// Version with reversed date format
// Usage: "your keyword", origin (IATA-Code), destination (IATA-Code), awaydate (DDMMYY)[, returndate (DDMMYY)]
javascript:
function invert(s) {
    return s.match(/.{2}/g).reverse().join("")
}
var args = "%s".split(/[\s,]+/);
function main(){
    const home = "muc";
    var args = "%s".split(/[\s,]+/);
    var origin = ((args[0] == "home") ? home : args[0]);
    var destination = ((args[1] == "home") ? home : args[1]);
    var awaydate = invert(args[2]);
    var returndate = ((typeof args[3] === "undefined") ? "" : "/" + invert(args[3]));
    document.location.href = "https://www.skyscanner.com/transport/flights/" + origin + "/" + destination + "/" + awaydate + returndate;
}
main();

javascript: function invert(s) { return s.match(/.{2}/g).reverse().join("") } var args = "%s".split(/[\s,]+/); function main(){ const home = "muc"; var args = "%s".split(/[\s,]+/); var origin = ((args[0] == "home") ? home : args[0]); var destination = ((args[1] == "home") ? home : args[1]); var awaydate = invert(args[2]); var returndate = ((typeof args[3] === "undefined") ? "" : "/" + invert(args[3])); document.location.href = "https://www.skyscanner.com/transport/flights/" + origin + "/" + destination + "/" + awaydate + returndate; } main();