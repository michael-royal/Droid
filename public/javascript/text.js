
var submenu1 = document.getElementById('submenu1')
var submenu2 = document.getElementById('submenu2')
var sub1hold = document.getElementById('sub1hold')
var sub2hold = document.getElementById('sub2hold')

var hamburger = document.getElementById('hamburger')

var mainMenu = document.querySelector('.list-group')

hamburger.addEventListener('click', () =>{
   mainMenu.classList.toggle('hide')
})
sub1hold.addEventListener('click', () =>{
   submenu1.classList.toggle('shown')
})
sub2hold.addEventListener('click', () =>{
   submenu2.classList.toggle('shown')
})

// step 1: list variables
var formed = document.querySelector('#main-form')
var select = document.querySelector('#lan')
var textd = document.querySelector('#textd')

// step 2: initialize the voices array 

let voices = []


function voiced(){
   voices = speechSynthesis.getVoices()
   console.log(voices)

   voices.forEach(voice => {
        var option = document.createElement('option')

      option.innerHTML = `${voice.name} (${voice.lang})`

      option.setAttribute('data-name', voice.name)
      option.setAttribute('data-lang', voice.lang)
      console.log(option)

      select.appendChild(option)
   })
}

if (speechSynthesis.onvoiceschanged !== undefined) {
   speechSynthesis.onvoiceschanged = voiced
   
}


 function speak(){
   if(speechSynthesis.speaking){
      console.error('already speaking...')
      return
   }
   // check if the input is empty

   if(textd.value !== ''){
      const speakTest = new SpeechSynthesisUtterance(textd.value)

      speakTest.onend = e => {
         console.log('done speaking')

      }

      speakTest.onerror = e =>{
         console.error('something went wrong')
      }


      const selectedVoice = select.selectedOptions[0].getAttribute('data-name')

      voices.forEach(voice => {
         if (voice.name === selectedVoice) {
console.log(selectedVoice)
            speakTest.voice = voice
            speakTest.lang = voice.lang
            

            console.log(speakTest.text)
            console.log(speakTest.rate)
            console.log(speakTest.volume)
            console.log(speakTest.lang)
            console.log(speakTest)
         }
      })
      speechSynthesis.speak(speakTest)
   }
 }

 function form(){
   formed.addEventListener('submit', (e) =>{
      e.preventDefault()
      
      speak()
    
   })
 }

 voiced()
 form()