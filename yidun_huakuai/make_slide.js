function RandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.floor(Rand * Range);
    return Math.floor(num);
}

function getDa(tt) {
    if (tt < 50){
        var c = tt * 0.5;
    }else {
        var c = 50;
    }

    var aa = tt / c;
    var bb = RandomNum(1500, 2000) / c;
    var res = ["0,0,18"];
    for (let i = 0; i <= c - 1 ; i++) {
        t_time = Math.floor(RandomNum(bb * (i - 1),bb * i));
        xxx = RandomNum(aa * (i - 1), aa * i);
        res.push([xxx + "," + RandomNum(0,1) + "," + t_time] +"");
    }
    return res;
}

module.exports = getDa;
