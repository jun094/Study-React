const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() {
    console.log(this.sound);
  }
};

// 이걸 arrow함수로 한다면?
const cat = {
  name: '고양이',
  sound: '야옹~',
};

cat.say = dog.say;
cat.say();
dog.say();


const catSay = cat.say;
catSay();
