//1
// let i = 3;
//
// while (i) {
//     alert( i-- );//3 2 1
// }

//2
// let i = 0;
// while (++i < 5) alert( i );//1 2 3 4

// let i = 0;
// while (i++ < 5) alert( i );//1 2 3 4 5

//3
// for (let i = 0; i < 5; i++) alert( i );//0 1 2 3 4
//
// for (let i = 0; i < 5; ++i) alert( i );//0 1 2 3 4

//4
// const count = 10;
// for (let i = 2; i<= count; i+=2){
//         alert(i);
// }

//5
// let i = 0
// while(i < 3){
//     alert( `number ${i}!` );
//     i++;
// }

//6
// while(true){
//     let number = prompt('Введите число больше 100','');
//
//     if(number >= 100 || !number) break
// }

//7
const intervalLength = 10;
loop: for(let i = 2; i <= intervalLength; i++){
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            continue loop;
        }
    }
    alert(i);
}