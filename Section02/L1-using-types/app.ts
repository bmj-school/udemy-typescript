console.log("Test 1");

function add(n1: number, n2: number, showRes: boolean, phrase: string) {
  console.log(typeof n1);
  const res = n1 + n2;
  if (showRes) {
    console.log(phrase + res);
  } else {
    return res;
  }
}

const x1 = 5;
const x2 = 2.8;
const printResult = true;
const resPhrase = 'Result is:'

const res = add(x1, x2, printResult, resPhrase);

console.log(res);
