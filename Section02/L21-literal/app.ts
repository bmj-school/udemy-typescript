type Combinable = number | string
type ConversionDesc = "as-number" | "as-text"
function combine(
  n1: Combinable,
  n2: Combinable,
  conversion: ConversionDesc
) {
  let res;
  if (typeof n1 === "number" && typeof n2 === "number") {
    res = n1 + n2;
  } else {
    res = n1.toString() + n2.toString();
  }
  if (conversion === "as-number") {
    return res.parseFloat();
  } else {
    return res.toString();
  }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", 'as-number');
console.log(combinedNames);
