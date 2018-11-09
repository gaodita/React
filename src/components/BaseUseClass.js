//function创建对象
function  Person(name,age){
    this.name = name;
    this.age = age;
}
const p1 = new Person('王多多',23)
console.log(p1);

console.log('-----------------------------');

//创建一个动物类
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    static info="aaa"
}

const a1=new Animal('王多多',23);

console.log(a1);
console.log(Animal.info);
