function sum(a, b, c, d, e, f, g) { // 파라미터 7개
  let sum = 0;
  if (a) sum += a;
  if (b) sum += b;
  if (c) sum += c;
  if (d) sum += d;
  if (e) sum += e;
  if (f) sum += f;
  if (g) sum += g;
  return sum;
}

const result = sum(1, 2, 3, 4, 5, 6); // 보내는 인자가 6개여도 if문이 있기때문에 사용가능
console.log(result);


// 근데 저건 너무 노가다 !!
function sum(...rest) {
  return rest;
}
const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}
const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // 21
