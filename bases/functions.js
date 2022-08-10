//1
let age = 20;
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?')
// }

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?')
}

//2
function min(a, b){
    return (a < b) ? a : b;
}

//3
const x = +prompt('x?', '');
const n = +prompt('n?', '');
function pow(x, n){
    if(n < 0){
        alert(`Степень ${n} не поддерживается, введите натуральное число.`)
        return;
    }
    return x ** n;
}

console.log(pow(x, n))

//4
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
);