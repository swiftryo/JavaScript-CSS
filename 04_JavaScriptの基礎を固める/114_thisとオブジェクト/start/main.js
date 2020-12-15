const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log(this.first_name);
        const fn = function() {
            console.log(this);
        };
        window.setTimeout(fn)  
    }
}

// JSでのthisはオブジェクトを参照するキーワード(保持)
// thisは呼ばれた状況によってとりうる値が変わる

const window = {
    setTimeout: function(fn) {
        fn();

    }
}

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
        const fn = function() {
            console.log(this);
        };
        window.setTimeout(fn)   
    }
}

// クラスを定義したときにはオブジェクトは生成されていない
// thisキーワードを使用


const obj2 = new MyObj();


obj.printFullName();
obj2.printFullName();