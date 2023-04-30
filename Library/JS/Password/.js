let btn = document.getElementById('btn').addEventListener('click', ()=> {
    let inp = document.getElementById('inp')
    if (inp.type == "password") {
        inp.type = 'text'
        document.getElementById('btn').innerHTML = "hidden"
    } else {
        inp.type = "password"
    }
});