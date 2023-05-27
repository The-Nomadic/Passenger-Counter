let count = 0
let saveEl = document.getElementById('save-el');

function increment(){
    count++;
    document.getElementById('js-people').innerText = count;
}

function save(){
    let result =" "+count+ " , "
    saveEl.innerText += result;
    count = 0;
    document.getElementById('js-people').innerText = count;
}

function reset(){
    saveEl.innerText = 'Previous Entities :'
}

function clearup(){
    count = 0;
    console.log(count);
    document.getElementById('js-people').innerText = count;
}
