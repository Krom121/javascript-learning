/** Truthy and falsy values equality operators. */

// falsy values: undefined, null, 0 '', Nan.
// truthy values: NOT falsy values.

var height;

height = 23;
if(height || height === 0){
    console.log('variable is defined');
} else {
    console.log('variable has not been defined');
}

// equality operators.
if(height == 23){
    console.log('the == operator does type coercion');
}