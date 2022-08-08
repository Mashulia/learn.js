//1
if ("0") {//выведется
    alert( 'Привет' );
}

const answer = prompt('Какое «официальное» название JavaScript?', '');

if(answer === 'ECMAScript'){
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}
//3
const number = prompt('input any number', '');

if(number > 0){
    alert(1);
} else if(number < 0){
    alert(-1);
} else{
    alert(0);
}

//4
let result = (a + b < 4) ? 'Мало' : 'Много';

//5
let message =  (login == 'Сотрудник') ? 'Привет' :
                login == 'Директор' ? 'Здравствуйте' :
                login == '' ? 'Нет логина' :
                '';