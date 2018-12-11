var reverse = function(x)
{
    var receiveArr = [];//接收字符串
    var tostr =x.toString();//将数字转换为字符串
    for (var i = tostr.length - 1;i>0;i--){
        receiveArr.push(tostr[i]);//将字符串倒着写入数组里
    }
    if (tostr[0]=="-"){
    receiveArr.unshift("-");//判断符号
    }
    receiveArr.push(tostr[0]);//将字符串的地址写入数组里
    var receivenum = parseInt(receiveArr.join(""));//重新生成字符串，并将其转换为数字并接收
    return receivenum;
}
