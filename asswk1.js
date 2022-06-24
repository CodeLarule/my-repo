//CHALLENGE 1 SECOND LARGEST
function halfBlood(y){
let k = y.sort((a,b) => b - a);
    return k[1];
};
console.log(halfBlood([40, 65, 42, 17, 24]));

//CHALLENGE 2 FILTER ARRAY TO RETURN NUMBERS
function azkaBan(myArr){
const x = myArr.filter(myArr => typeof myArr !== "string");
    return x
};
console.log(azkaBan([89, "Ada", 60, "Chambers"]));

//CHALLENGE 3 SUM MIX
function mudBlood(z){
const v = z.map((z) => parseInt(z, 10));
const x = v.reduce((a,b) => a + b)
    return x
};
console.log(mudBlood([1, "3", 5, "7"]));

//CHALLENGE 4 SUM OF TWO SMALLEST NUMBERS
function dumbleDore(v){
v.sort((a,b) => a - b);
const w = v.filter((v) => v >= 0)
    return w[0] + w[1] 
}
console.log(dumbleDore([4, -5, 87, 20, 42, -1]));

//CHALLENGE 5 FILTER LIST TO RETURN AN ARRAY OF NUMBERS 
// const q = new Array(1, 2, "b", "c");
function volDerMort(q) {
    const p = q.filter(q => typeof q !== "string");
    return p
};
console.log(volDerMort(new Array(1, 2, "b", "c")))