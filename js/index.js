//set the initial value of the counter
let ticks = 0;
let mins = 0;
let likes = 0;
let addBtn = document.getElementById('btn-add');
let subBtn = document.getElementById('btn-subtract');
let startBtn = document.getElementById('start-btn')
let pauseBtn = document.getElementById('puase-btn');
let likeBtn = document.getElementById('like-btn');
let comments = document.querySelector('.comments');
let resetBtn = document.getElementById('reset-btn');
let tickslabel = document.getElementById('ticks');
let minsLabel = document.getElementById('mins');

function ticksIncreament(){
    
    ticks ++;
    likes = 0
    if (ticks === 60){
        mins++;
        ticks = 0;
        tickslabel.textContent = `${ticks} Seconds`
        minsLabel.textContent = `${mins} Minutes`;

    }else{
        tickslabel.textContent = `${ticks} Seconds`;
        minsLabel.textContent = `${mins} Minutes`;

    }
    
    return ticks;

}

function addTicks(){
    ticks += 1
}

function subtractTicks(){
    ticks -= 1
}
//let interval = setInterval(startTicks, 1000)
function startTicks(){
    ticksIncreament()
    let interval = setInterval(ticksIncreament, 1000)
    function pauseAndPlayTicks(){

        if (pauseBtn.textContent === 'Pause'){
            clearInterval(interval);
            pauseBtn.textContent = 'Resume';
            addBtn.setAttribute('disable', false);
            addBtn.style.color="red"
            subBtn.setAttribute('disable', false);
            subBtn.style.color="red"
        }else{
            setInterval(ticksIncreament, 1000);
            pauseBtn.textContent = 'Pause';
            addBtn.setAttribute('disable', true);
            subBtn.setAttribute('disable', true);
        }
        
    }
    function resetTimer(){
        ticks = 0;
        mins = 0
    
        tickslabel.textContent = `${ticks} Seconds`;
        minsLabel.textContent = `${mins} Minutes`;
        clearInterval(interval)
    }
    pauseBtn.addEventListener('click', pauseAndPlayTicks)
    resetBtn.addEventListener('click', resetTimer)
}



function likesCount(){
    let para = document.getElementById('para');
    likes += 1;
    para.textContent = `${ticks} liked ${likes} times`;
    return likes;
}

function addComment(e){
    e.preventDefault()
    let para = document.createElement('p');
    para.textContent = document.getElementById('textarea').value;
    comments.appendChild(para)
    return para;
}


addBtn.addEventListener('click', addTicks);
subBtn.addEventListener('click', subtractTicks)
startBtn.addEventListener('click', startTicks);
likeBtn.addEventListener('click', likesCount)
document.querySelector('.form').addEventListener('submit', addComment)


