let a = 10; // global Scope
let outerFn = () => {
    let b = 20; // outerFn Scope
    let innerFn = () => {
        let c = 30; // innerFn Scope
        console.log(a);
        console.log(b);
        console.log(c);
    };
    return innerFn;
};
let greet = (fName) => {
    fName();
};
let iFn = outerFn();
greet(iFn);
