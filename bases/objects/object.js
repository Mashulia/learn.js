//1
const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//2
function isEmpty(obj){
    for(let key in obj){
        // if(obj[key]){ можно без условия, т к если цикл начнет выполняться, значит объект уже не пустой
            return false
        // }
    }
    return true;
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

//3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;

for(let key in salaries){
    sum+=salaries[key]
}

//4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for(let key in obj){
        if(typeof key === 'number') {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu);

console.log(menu)