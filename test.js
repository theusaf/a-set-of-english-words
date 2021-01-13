const words = require('.');

console.log("Should have over 270,000 words:",words.size > 270e3);

console.log("Should be a Set:",words instanceof Set);

const fun = new Set();
words.forEach((w)=>{
  if(/fun/.test(w)){
    fun.add(w);
  }
});
console.log("Should have the characters 'fun' in them:",fun);
