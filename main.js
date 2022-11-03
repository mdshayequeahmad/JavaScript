var x = function(){
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    }, 1)
};

var xx = new x();

var x1 = (...n) => {
    console.log(n[0]);
}

x1(1, 2, 3);