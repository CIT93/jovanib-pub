I learned a bit more about functions
default value
spread argument
IIFE
code: const add2 = function(...a) {
    return 2 + a(3);
}
const result = add2(1,2,3,4);

const a = 3;

(function(a){
    console.log("inside IIFE");
    console.log(a);
})(a);