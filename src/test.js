var mypromise = new Promise((resolve, reject) => {
    setTimeout( function(){
        resolve("resolved");
    },10000);    
    }
);




// write a custom promise

const PENDING = 0;
const RESOLVED = 1;
const REJECTED = 2;




function CustomPromise(execute) {
    let state = PENDING;
    let result = null;
    let handlers = [];
    let catches = [];

    this.then = function(cb){
        if(state !== PENDING){
            cb(result);
            console.log("then called")
        }
    }

    this.catch = function(cb){
        if(state !== PENDING){
            cb(result);
            console.log("catch called")
        }
    }

    function resolve(val) {
        if (state !== PENDING) return;

        result = val;
        state = RESOLVED;
        handlers.forEach((handle) => handle(result))
    }

    function reject(val) {
        if (state !== PENDING) return;

        result = val;
        state = REJECTED;
        catches.forEach((catche) => catche(result))
    }
    execute(resolve, reject);
}