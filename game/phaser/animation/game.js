// const game = nrw Pharser.game()

const Pharser = {};
Pharser.Game = function(w,h,type, ele,options){
    // 构造函数 函数被new运行
    console.log('构造函数');
    this.width = w;
    this.height = h;
}

let zombiegame = new Pharser.Game(800,600);
console.log(zombiegame.width,zombiegame.height);