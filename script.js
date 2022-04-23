'use strict'

//①変数gnを定義
let honyaku;


// ③ｓデータを受け取り年号をreturn
function yakudoshi(birth) {
    honyaku = parseInt(birth) + 24;
    return honyaku
}

//②西暦データを定数sに代入しfunction(getNengo)へ値を送る。
//④年号のretunを受け取り,output2に表示。
document.getElementById('button').onclick = function () {
    const birth = document.getElementById('birth').value;
    honyaku = yakudoshi(birth);                                    //yakudoshiに西暦データを送り本厄のreturnを受け取る。
    document.getElementById('output1').textContent = `${honyaku}年`;
    document.getElementById('output2').textContent = `${honyaku + 17}年`;
    document.getElementById('output3').textContent = `${honyaku + 36}年`;
}