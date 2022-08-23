//1
const calculator = {
    read: function(){
        this.x = +prompt('x?', '')
        this.y = +prompt('y?', '')
    },
    sum: function(){
        return this.x + this.y
    },
    mul: function(){
        return this.x * this.y
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//2
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep();