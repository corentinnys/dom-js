

const _initTime = Date.now()

function getElapsedTime(){
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
    let time =getElapsedTime()
    let  div = document.createElement("div");
    div.className = 'displayedsquare';
    div.style.background = e.target.classList[1];

    div.onclick = function ()
    {
        alert( e.target.classList[1]);
    }
    document.querySelector('.displayedsquare-wrapper').appendChild(div);
    let ul =document.querySelector('h2+ul')
    let li =document.createElement('li');
    li.innerHTML="["+time+"] Created a "+ e.target.classList[1]+" new square";
    ul.appendChild(li);


   // div.addEventListener('click', dialog(e.target.classList[1]))
    let container = document.querySelector('.displayedsquare-wrapper');

}

function  dialog(currentColor) {
    alert(currentColor);
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
    actionsquare.addEventListener('click', clickOnSquare)
}


document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {

        let firstColor = Math.ceil(Math.random()*255);
        let secondColor = Math.ceil(Math.random()*255);
        let lastColor = Math.ceil(Math.random()*255);

        document.querySelector('body').style.backgroundColor= 'rgb(' + firstColor + ',' + secondColor + ',' + lastColor + ')';
    }
    if(event.code =='KeyS')
    {
        let list = document.querySelectorAll('h2+ul> li')
        for (items of list)
        {
            items.remove();
        }
        let div  =document.querySelectorAll('.displayedsquare')
            for (items of div )
            {
                items.remove();
            }
    }
});