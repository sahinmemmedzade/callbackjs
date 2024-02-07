

let topla = 0;
let cixma = 0;
let vurma = 1;
let bolme = 1;
let riyaziemel = "vurma";

function cixmama(num1, num2, callminus) {
    cixma = num1 - num2;
    return callminus(cixma);
}

function toplama(num1, num2, callplus) {
    topla = num1 + num2;
    return callplus(topla);
}

function bolmeme(num1, num2, callbolme) {
    bolme = num1 / num2;
    return callbolme(bolme);
}

function vurmama(num1, num2, callvur) {
    vurma = num1 * num2;
    return callvur(vurma);
}

function Output(output) {
    console.log(output);
}

switch (riyaziemel) {
    case "cixma":
        cixmama(15, 5, Output);
        break;
    case "topla":
        toplama(15, 5, Output);
        break;
    case "bolme":
        bolmeme(15, 5, Output);
        break;
    case "vurma":
        vurmama(15, 5, Output);
        break;
    default:
        console.log("riyazi emel deyil!!!!");
        break;
}

let newarr=[]
function TekEded(arr,callback) {

  let newarr= arr.filter(x=>x%2===1)
    return callback (newarr,Output);

}
function onbes(arr,onbescallback) {
    newarr= arr.filter(x=>x%15==0)
    return onbescallback(newarr)
}
function Output(output) {
    console.log(output);
}
let arr=[12,34,25,15,30,75,60,105]
TekEded(arr,onbes)



