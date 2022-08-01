let sad = [
  'Sometimes it takes sadness to know happiness, noise to appreciate silence and absence to value presence',
  'Sometimes, life will kick you around, but sooner or later, you realize you are not just a survivor. You are a warrior, and you are stronger than anything life throws your way',
  'And if today all you did was hold yourself together, I am proud of you.',
  'Give yourself another day, another chance. You will find your courage eventually. Do mot give up on yourself just yet',
  'It is up to you today to start making healthy choices. Not choices that are just healthy for your body, but healthy for your mind',
  'Today I refuse to stress myself out over things I cannot control and change',
  'You cannot control everything. Sometimes you just need to relax and have faith that things will work out. Let go a little and just let life happen',
  'Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity',
  'Remember the time you thought you never could survive? You did, and you can do it again.” Never give up on the positivity in life',
  'Trust yourself. You have survived a lot, and you will survive whatever is coming',
  'Just because you are struggling does not mean you are failing.',
  'Happiness comes in waves, it will find you again.',
  'It is okay to not be okay',
  'You are stronger than anything that has happened to you',
  'And it is okay to cry, because that is the way you let go',
]

let heart = [
  'Do not let someone who is not worth your love make you forget how much you are worth',
  'A heartbreak is a blessing from God. It is just His way of letting you realize that He saved you from the wrong one.',
  'Some things break your heart but fix your vision',
  'Do not be afraid to start over. It is a brand new opportunity to rebuild what you truly want',
  'Never love anybody that treats you like you are ordinary',
  'Letting go does not mean that you do not care about someone anymore. It is just realizing that the only person you really have control over is yourself',
  'Some people do not realize what they have until it is gone, but that does not always mean they are supposed to get it back',
  'Someone who values you , would never put themselves in a position to loose you',
  'Relationships are like glass. Sometimes it is better to leave them  broken than try to hurt yourself putting it back together',
  'If you can love the wrong person that much, imagine how much you can love the right one',
  'A person that truly loves you will never let you go, no matter how hard the situation',
  'Sometimes someone has to make us cry just to realize that we deseve somoen who makes us smile',
  'We met for one or two reasons, it is either you are blessing or a lesson',
  'Sometimes good things fall apart , so better things can fall together',
  'Be gentle with yourself , you are doing the best you can',
  'It is time to just be happy. Being sad, angry and overthinking is not worth it anymore . Just let things flow. Be POSITIVE',
  'You do not lose a good partner, you lose a partner who is not good for you',
  'Closure happens right after you accept that letting go and movign on is more important than projecting a fantasy of how the relationship could have been',
  'Be with someone that requires you to grow, make you forget your problems, holds you rhand, likes to kiss, appreciates art and adores you',
  'Overthinking will destroy your mood,breathe and let go',
  'Forget the past, forget the pain and remember what an incredible human being you are',
  'Be strong enough to let go and wise enough to wiat for what you deseerve',
  'You deserve to be loved and to be missed, you deseve to have someone who notices the emptiness in the air when you are not around',
  'Sometimes you just have to accept the fact that some people only enter your life as temporary happiness',
  'Never allow someone to be your priority while allowing yourself to be their option',
  'It will be okay, just not today',
  'Love yourself more than you ever have before'
]

let afraid = [
  "Each of us must confront our own fears, must come face to face with them. How we handle our fears will determine where we go with the rest of our lives. To experience adventure or to be limited by the fear of it",
  "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I have lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do",
  "The key to change... is to let go of fear.",
  "It is OKAY to be scared. Being scared means you are about to do something really, really brave",
  "I have to face the fear. I have to take control of the situation and find a way to make it less frightening.",
  "You have to conquer every obstacle, before you can reach the top of the mountain.",
  "You—yes, you—can overcome fear and quit living your life as a fearful person, just as I did. It is not that things are not going to be scary; but God has given you power over them",
  " Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go",
  "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own",
  "Cast all your anxiety onto God because he cares for you.",
  "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success",
  "It is hard to fail,but it is worse never to have tried to succeed",

]


//this index will stand for the indexes in the array
const container = document.querySelector('main')
const subContainer = document.querySelector('section')
const sadBtn = document.querySelector('#sad')
const heartBroken = document.querySelector('#heartbroken')
const fear = document.querySelector('#fear')
const backBtn = document.querySelector('#back')
const nextBtn = document.querySelector('#next')
const nextBtn2 = document.querySelector('#next2')
const nextBtn3 = document.querySelector('#next3')
const playBtn = document.querySelector('#play')
const pauseBtn = document.querySelector('#pause')
const myAudio = document.querySelector('.music')

//heartbreak quotes function
function heartbreak(){
  let index2 = Math.floor(Math.random() * 27)
  subContainer.innerHTML = `<p class="text-anime"> " ${heart[index2]} "</p>`
  backBtn.style.display = 'block'
  nextBtn2.style.display ='block'
  playBtn.style.display = 'block'
  pauseBtn.style.display = 'block'
  container.style.display = 'none'
}

heartBroken.addEventListener('click', heartbreak)


function sadness(){
  //generate random number from 0 - 15
  let index = Math.floor(Math.random() * 15)
  backBtn.style.display = 'block'
  nextBtn.style.display ='block'
  playBtn.style.display = 'block'
  pauseBtn.style.display = 'block'
  container.style.display = 'none'

  subContainer.innerHTML = ` <p class="text-anime"> "${sad[index]}"</p> `
}
sadBtn.addEventListener('click', sadness)




function fearness(){
   //generate random number from 0 - 13
   let index3 = Math.floor(Math.random() * 12)
   backBtn.style.display = 'block'
   nextBtn3.style.display ='block'
   playBtn.style.display = 'block'
   pauseBtn.style.display = 'block'
   container.style.display = 'none'
   subContainer.innerHTML = `<p class="text-anime"> " ${afraid[index3]} "</p>`
}

fear.addEventListener('click',fearness)

backBtn.addEventListener('click',()=>{
  backBtn.style.display = 'none'
  nextBtn.style.display ='none'
  nextBtn2.style.display ='none'
  nextBtn3.style.display ='none'
  playBtn.style.display = 'none'
  pauseBtn.style.display = 'none'
  container.style.display = 'block'
  subContainer.innerHTML = ''
})


nextBtn.addEventListener('click',()=>{
  //generate a random number from 0 -15
  let index = Math.floor(Math.random() * 15)
  subContainer.innerHTML = `<p class="text-anime">" ${sad[index]} "</p>`

})

nextBtn2.addEventListener('click',()=>{
  //generate a random number from 0 -27
  let index2 = Math.floor(Math.random() * 27)
  subContainer.innerHTML = `<p class="text-anime"> " ${heart[index2]} "</p>`

})

nextBtn3.addEventListener('click',()=>{
  //generate a random number from 0 -27
  
  let index3 = Math.floor(Math.random() * 12)
  console.log(index3)
  subContainer.innerHTML = `<p class="text-anime"> " ${afraid[index3]} "</p>`

})




pauseBtn.addEventListener('click',()=>{
  myAudio.pause()
})
playBtn.addEventListener('click',()=>{
  myAudio.play()
})


 const body = document.querySelector('body')
let change = (color,delay)=>{
  return new Promise ((resolve,reject)=>{
    setInterval(()=>{
        body.style.backgroundColor = color
        resolve()
    },delay)
  })
}

change('#abff4f',2000)
.then(()=>{
  return change('#e2eafc',2000)
})

setInterval(change,5000)