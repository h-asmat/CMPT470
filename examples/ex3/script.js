// function outer(in1, in2, reporter) {
//     let total = in1 + in2;
//     reporter(total);
// }

// // function inner(inp) {
// //     console.log(inp);
// // }

// outer(43,65, function(input){
//     alert(input);
// } );

class Person {
    constructor(n,a){
        this.name = n;
        this.age = a;
    }
    descr() {
        return this.name + " " + this.age;
    }
}

