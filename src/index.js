import login from './components/login/login';

import $ from "jquery";

const test = {
    a : {
        b: 6
    }
};

$(".test").on("click", function(){
    console.log(this);
})
console.log(test);