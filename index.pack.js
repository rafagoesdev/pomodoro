// You got this! 💫


// 💻 Work: 25 mins
// ☕️ Short break: 5 mins
// 🌯 Long break: 15 mins
let pomodoroTime, pom, min, sec, minF, secF;
let total = 0;
const display = document.getElementById("time-display");
const type = document.getElementById("type");
const snd = new Audio("alarm.wav");

function pomInit() {
    pomodoroTime--;
    min =  parseInt(pomodoroTime/60);
    sec = pomodoroTime%60;
    min < 10 ? min = `0${min}` : false;
    sec < 10 ? sec = `0${sec}` : false;
    display.innerHTML = `${min}:${sec}`;

    //increase total time focused
    total++;
    minF =  parseInt(total/60);
    secF = total%60;
    minF < 10 ? minF = `0${minF}` : false;
    secF < 10 ? secF = `0${secF}` : false;
    focused.innerHTML = `Total time: ${minF}:${secF}`;
    
    //Time finished
    if (pomodoroTime == 0) {      
        clearInterval(pom);
        snd.play();
        setTimeout(function stopAlarm() {
            snd.pause();
          }, 5000)
        type.innerHTML = "Pomodoro"        
    }
}

//Function to start pomodoro timer
function startPom(pTime) {
    pomodoroTime = pTime*60;
    if (pTime == 25) {
        type.innerHTML = "Work"
    }
    else if(pTime == 15) {
        type.innerHTML = "Long break"
    }
     else {
        type.innerHTML = "Short break"        
    }
    pTime == 5 ? pTime = "05" : false;
    display.innerHTML = `${pTime}:00`; 
    clearInterval(pom);
    pom = setInterval(pomInit, 1000);
}

function pause() {
    clearInterval(pom);
    type.innerHTML = "Pomodoro";
    display.innerHTML = `00:00`;
}
