javascript:(function(){
    const home = "muc";
    var args = '%s'.split(/[\s,]+/);
    var origin = ((args[0] == "home") ? home : args[0]);
    var destination = ((args[1] == "home") ? home : args[1]);
    var awaydate = args[2]
    var returndate = ((typeof args[3] === 'undefined') ? "" : "/" + args[3])
    
    document.location.href = "https://www.skyscanner.com/transport/flights/" + origin + "/" + destination + "/" + awaydate + returndate;
})();


javascript:
function invert(s) {
    return s.match(/.{1, N}g/).reverse().toString()
  }