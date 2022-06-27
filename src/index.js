module.exports = function toReadable (n) {
    let b = String(Math.abs(n));
    let number = 
    ['zero','one','two','three','four','five','six','seven','eigth','nine','ten',
    'eleven','twlve','thirteen','fourteen','fifteen','sixteen','seventeen',
    'eighteen','nineteen','twenty'];
    number[30]='thirty';
    number[40]='forty';
    number[50]='fifty';
    number[60]='sixty';
    number[70]='seventy';
    number[80]='eighty';
    number[90]='ninety';
    number[100]='hundred';
    let rez='';
    
    if (b.length == 3) {
        rez += number[b[0]];
        rez += ' ' + number[100]
        if (Number(b[1] + b[2]) < 21)
            rez += ' ' + number[Number(b[1] + b[2])];
        else {
            rez += ' ' + number[Number(b[1] + '0')];
            rez += ' ' + number[Number(b[2])];
        }
    }
    else if (b.length == 2){
        if (Number(b[0] + b[1]) < 21)
            rez += ' ' + number[Number(b[0] + b[1])];
        else {
            rez += ' ' + number[Number(b[0] + '0')];
            rez += ' ' + number[Number(b[1])];
        }
    }
    else    rez +=number[Number(b[0])];
    return rez;
}
