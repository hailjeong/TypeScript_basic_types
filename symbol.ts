// 결과 => false
console.log(Symbol("hail") === Symbol("hail"));

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym];
