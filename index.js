let count = 0

function increment(){
    count++;
    console.log(count);
    document.getElementById('js-people').innerText = count;
}

function save(){
    console.log(count)
}