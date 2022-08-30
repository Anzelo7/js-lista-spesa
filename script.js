console.log('JS OK')

//stampare una lista della spesa con ciclo while

const list = ['mela', 'pera', 'banana', 'brioche']
let i = 0;
let text = ""
while (i < list) {

    console.log(list[i]);

    text += list[i];
    i++;
}

document.getElementById("list").innerHTML = text;