//function创建对象
function  Person(name,age){
    this.name = name;
    this.age = age;
}

//原型方法
Person.prototype.say =function () {
    console.log("say hello!");
}
//静态方法
Person.show=function () {
    console.log("静态函数show方法！")
}





const p1 = new Person('王多多',23)
console.log(p1);
Person.show();
p1.say();

console.log('-----------------------------');

//创建一个动物类
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    static info="aaa"
  //类方法
    jiao(){

        console.log("类的方法 叫！！！！");
    };
    //类静态方法
    static showanimal(){
        console.log("类的静态方法 叫！！！！");

    }
}

const a1=new Animal('王多多',23);

console.log(a1);
a1.jiao();
console.log(Animal.info);
Animal.showanimal();