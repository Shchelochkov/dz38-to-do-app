
let addbut = document.getElementById("add");
let inp = document.getElementById("inp");
let taskList = document.getElementById("tasklist");

const chek = document.getElementsByClassName("checkbox");
const cross = document.getElementsByClassName("cross");
const boxes = document.getElementsByClassName("box");

addbut.onclick = add

function add() {
    if (inp.value!='') {
    let newz = '<div class="box"><div class="checkbox"></div><p>' + inp.value + '</p><img src="w.png" alt="" class="cross"></div>'
    tasklist.innerHTML += newz
    update()
    inp.value = ''
    }
}

function update() {
    for(c of chek){
        c.onclick = fchek
    }
    for (c of cross) {
        c.onclick = fdel
    }
}

function fchek() {
    if(this.style.backgroundColor == 'violet'){
        this.style.backgroundColor = 'white'
    }
    else{
        this.style.backgroundColor = 'violet'
    }
}
function fdel() {
    console.log('ok')
    console.log(this.parentNode)
    let parent = this.parentNode
    parent.style.display = 'none'
}

