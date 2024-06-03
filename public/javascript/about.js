var showbio = document.getElementById('showbio')
var abteben = document.getElementById('abteben')
var contAddress = document.getElementById('contactaddress')
var showCont = document.getElementById('showcontact')
var hamburger = document.getElementById('hamburger')

var ham = document.getElementById('hamburger')
var list = document.querySelector('.list-group')


ham.addEventListener('click', () =>{
   list.classList.toggle('hide')
})
showbio.addEventListener('click', () =>{
    abteben.classList.toggle('hide')
})
contAddress.addEventListener('click', () =>{
    showCont.classList.toggle('hid')
})