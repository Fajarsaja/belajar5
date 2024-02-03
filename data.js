let body= document.body;
const darkLimit = 5;
let darkCountter = 0;
let darkRemainingleft ;
let info = document.getElementById("info")
let mode = document.getElementById("mode")
let home = document.getElementById("home")


function darkMode() {
    if( darkRemainingleft == 0){
    info.textContent = "jatah darkmode anda sudah habis"
    mode.style.display =  "none"
    home.textContent = "restart"
    return;
    }
    darkCountter += 1;
    darkRemainingleft = darkLimit-darkCountter

    // render ke info element

    info.textContent = `darkmode dipakai ${darkCountter}x, tersisa ${darkRemainingleft}`
    
    console.log('dark mode diklik',darkCountter)
    console.log('kesempatan anda',darkRemainingleft)
    body.classList.toggle("dark")
    
}

function rerender(){
    location.reload();
}

