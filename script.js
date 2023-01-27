/* :::::::::::::::::::::

::::    ::::         ::::    ::::
::::    ::::         ::::  :::: 
::::::::::::         :::::::
::::::::::::         ::::::: 
::::    ::::   :::   ::::  :::: 
::::    ::::   :::   ::::     ::::  

::::::::::::::::::::::::*/


const words = [
    "AI", "machine learning", "big data", "cloud computing", "IoT", "blockchain", "robotics", "drones", "3D printing", "virtual reality", "augmented reality", "smartphones", "tablets", "smartwatch", "wearables", "smart home", "smart city", "fintech", "cryptocurrency", "programming", "coding", "algorithms", "automation", "software", "hardware", "networking", "cybersecurity", "app development", "web development", "graphics", "animation", "gaming", "streaming", "social media", "e-commerce", "big data analytics", "machine vision", "natural language processing", "robotics", "drones", "3D printing", "virtual reality", "augmented reality", "smartphones", "tablets", "smartwatch", "wearables", "smart home", "smart city", "fintech", "cryptocurrency", "programming", "coding", "algorithms", "automation", "software", "hardware", "networking", "cybersecurity", "app development", "web development", "graphics", "animation", "gaming", "streaming", "social media", "e-commerce", "big data analytics", "machine vision", "natural language processing", "robotics", "drones", "3D printing", "virtual reality", "augmented reality", "smartphones", "tablets", "smartwatch", "wearables", "smart home", "smart city", "fintech", "cryptocurrency", "programming", "coding", "algorithms", "automation", "software", "hardware", "networking", "cybersecurity", "app development", "web development", "graphics", "animation", "gaming", "streaming", "social media", "e-commerce", "big data analytics", "machine vision", "natural language processing", "robotics", "drones", "3D printing", "virtual reality", "augmented reality", "smartphones", "tablets", "smartwatch", "wearables", "smart home", "smart city", "fintech", "cryptocurrency", "programming", "coding", "algorithms", "automation", "software", "hardware", "networking", "cybersecurity", "app development", "web development", "graphics", "animation", "gaming", "streaming", "social media", "e-commerce", "big data analytics", "machine vision", "natural language processing",'land',
    'Javascript',
    'sneeze',
    'battle',
    'plan',
    'tongue',
    'shocking',
    'kitty',
    'sisters',
    'Batman',
    'oceanic',
    'school',
    'cent',
    'oranges',
    'tense',
    'sail',
    'war',
    'dam',
    'poor',
    'trace',
    'jellyfish',
    'parsimonious',
    'jittery',
    'alert',
    'pest',
    'thing',
    'berserk',
    'glossy',
    'houses',
    'man',
    'charming',
    'pale',
    'glass',
    'reflect',
    'dusty',
    'attach',
    'auspicious',
    'illustrious',
    'drum',
    'insidious',
    'correct',
    'bury',
    'repulsive',
    'handsomely',
    'snore',
    'power',
    'exercise',
    'flap',
    'materialistic',
    'repair'
]

window.addEventListener('load',init);

let time=5;
let score=0;
let isplaying;

 //levels
const levels = {
easy:5,
medium: 3,
hard:2
}

//change levels
const currentlevel=levels.medium;


// DOM

const wordinput = document.getElementById('word-input');
const currentword=document.getElementById('current-word');
const scoredisplay =document.getElementById('score');
const timedisplay =document.getElementById('time');
const messagedisplay =document.getElementById('message');
const seconds =document.getElementById('seconds');

// starting game
function init(){
    //showing no. of seconds 
    seconds.innerHTML=currentlevel+ 'seconds';
    //load a word  from  array
    showWord(words);
    // match words
    wordinput.addEventListener('input',startMatch);
    //call countdown timwer
setInterval(countdown,1000);
//checkstatus
setInterval(checkStatus,50);
}
//start match
function startMatch(){
    if(matchWords()){
isplaying=true;
time=currentlevel+1;
showWord(words);
wordinput.value="";
score++;
    }
    // if score is -1 display 0
    if(score===-1){
scoredisplay.innerHTML=0;
    }
    else{
        scoredisplay.innerHTML=score;
    }
}

function matchWords(){
    if(wordinput.value === currentword.innerHTML){
        messagedisplay.innerHTML="Correct!!!";
        messagedisplay.style.color='green';
return true;
    }
else{
    messagedisplay.innerHTML=" ";
    return false;
}
}

function showWord(words){
    // generating random words from array
    const randomindex =Math.floor(Math.random() * words.length);
// show that word 
currentword.innerHTML=words[randomindex];
}

// countdown timer
function countdown(){
    if(time>0){
        time--;
    }
else if(time===0){
    isplaying=false;
}
time.innerHTML=time;
}
//checking status

function checkStatus(){
    if(!isplaying && time===0){
messagedisplay.innerHTML="Game Over !!!";
score=0;
messagedisplay.style.color="yellow";
    }
}