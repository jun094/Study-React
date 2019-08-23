class Food {
  constructor(name) {
    this.name = name;
    this.brands = []; // 배열 선언 !
  }
  addBrand(brand) {
    this.brands.push(brand)
  }
  print() {
    console.log(`${this.name}을/를 파는 음식점들:`)
    console.log(this.brands.join(', '));  // 배열안에 있는것들을 ,를 구분자로 문자열 1개로 만들어줌
  }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');

pizza.print()
chicken.print();
