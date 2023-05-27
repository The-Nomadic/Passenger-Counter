let count = 0
let saveEl = document.getElementById('save-el').innerText;

function increment(){
    count++;
    document.getElementById('js-people').innerText = count;
}

function save(){
    let result =" "+count+ " - "
    saveEl += result;
    document.getElementById('save-el').innerText = saveEl
}
