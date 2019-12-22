console.log("Test 1");
function add(n1, n2, showRes, phrase) {
    console.log(typeof n1);
    var res = n1 + n2;
    if (showRes) {
        console.log(phrase + res);
    }
    else {
        return res;
    }
}
var x1 = 5;
var x2 = 2.8;
var printResult = true;
var resPhrase = 'Result is:';
var res = add(x1, x2, printResult, resPhrase);
console.log(res);
