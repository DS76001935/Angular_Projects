function add(a,b){
    console.log(a+b);
}
function mul(a,b) {
    console.log(a*b);
}
console.log("-----Local access-----")
add(20,80)
mul(8,9)
console.log("----------------------");
module.exports.addition = add
module.exports.multiplication = mul
console.log(module.exports);
// console.log(module);